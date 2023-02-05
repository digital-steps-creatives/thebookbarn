<?php

namespace App\Http\Controllers;

use Validator;
use Carbon\Carbon;
use App\Dsc\Helper;
use App\Models\Order;
use GuzzleHttp\Client;
use App\Models\Payment;
use App\Models\BookShop;
use App\Models\Customer;
use Faker\Provider\Uuid;
use App\Models\Quotation;
use Akaunting\Money\Money;
use App\Enums\OrderStatus;
use Illuminate\Http\Request;
use App\Facades\Response;
use Illuminate\Support\Facades\Log;
use App\Notifications\NotifyVendorOrderPaid;

class PaymentController extends Controller
{   
    
    protected $requestTime;
    protected $reference_number;

    public function __construct()
    {
        $this->requestTime = Carbon::now()->toDateTimeString();
        $this->reference_number = Uuid::uuid();

    }
    
    /**
     * Lipa na M-PESA STK Push method
     * */
    public function customerMpesaSTKPush(Request $request)
    {
        $customerId = $this->updateCustomer($request);
        $finalAmount = env('APP_ENV') == 'local' ? 1 : round($request->amount);
        $phone = Helper::formatMobileNumber($request->phone);
        $quoteReference =  $request->invoice_no;
        $payload = [
            'transaction_type' => 'CustomerPayBillOnline',
            'amount' => $finalAmount,
            'phone' => $phone,
            'policy_number' => $quoteReference,
            'TransactionDesc' => 'Payment for Order: ' .$quoteReference
        ];
       
        $client = new Client();
        $url = '/api/malipo/v1/stk/payment';
        $server = config('mpesa.url'). $url;
        $stkPushResponse = $client->post($server, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
            ],
            'body' => json_encode($payload)
        ]);
       
        $responsePayload = json_decode($stkPushResponse->getBody()->getContents());
        
        $stkResponse = (isset($responsePayload->response->ResponseCode) ? $responsePayload->response : []);
        
        $order = Order::where('invoice_no', $request->invoice_no)->first();
        $order->update([
            'address' => $request->address,
            'delivery_fee' => $request->delivery_fee,
            'delivery_type' => $request->delivery_type
        ]);

        if (!empty($stkResponse)) {

            $update = Payment::where('order_id', $order->id)->update([
                'mpesa_checkout_request_id' => $stkResponse->CheckoutRequestID,
                'merchant_request_id' => $stkResponse->MerchantRequestID,
                'status' => 0
            ]);

            if ($update) {
                $response = $this->stkPushStatusHealth($stkResponse->MerchantRequestID, $stkResponse->CheckoutRequestID, $order->customer->email, $order->invoice_no);
            } else {
                $response = Response::error('Error pushing STK 1', '403');
            }
        } else {
            $response = Response::error('Error pushing STK 2', '403');
        }

        return $response;
        
    }
    

    public function paymentStatus(Request $request)
    {
        $rules = [
            'checkoutId' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        $url = '/stkpushquery/v1/query';
        
        $payload = [
            'BusinessShortCode' => config('mpesa.shortcode'),
            'Password' => Helper::lipaNaMpesaPassword(),
            'Timestamp' => date('YmdHis'),
            'CheckoutRequestID' => $request->checkoutId
        ];
        $method = 'post';
        $response = Helper::global_Curl_post($payload, $url, $method);
        $stkResponse = json_decode($response);
        //dd($checkResponse);
        $order = Order::where('invoice_no', $request->invoice_no)->first();
        
        if(!empty($stkResponse)){

            $update = Payment::where('order_id', $order->id)->update([
                'mpesa_checkout_request_id' => $stkResponse->CheckoutRequestID,
                'merchant_request_id'=> $stkResponse->MerchantRequestID,
                'status' => 0
            ]);

            if ($update) {
                $response = $this->stkPushStatusHealth($stkResponse->MerchantRequestID, $stkResponse->CheckoutRequestID, $order->customer->email, $order->invoice_no);
            }
            else {
                $response = Response::error('Error pushing STK 1', '403');
            }
        }
        else {
            $response = Response::error('Error pushing STK 2', '403');
        }

        return $response;           
    } 


    private function updateCustomer($customer)
    {
        
        $user = Customer::where('email', $customer->email)->first();
        $user->name  = $customer->name;
        $user->email  = $customer->email;
        $user->phone  = $customer->phone;
        if($user->update()){
            $order = Order::where('invoice_no', $customer->invoice_no)->first();
            $order->address = $customer->address;
            $order->delivery_type  = $customer->delivery_type;
            $order->update();
        }
        return $user;
    }

    public static function eshop_health_stk_verify($payload, $url)
    {
        $client = new Client();

        $response =  $client->get($url, [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                ],
                'body' => json_encode($payload)
            ]);

        

        $responsePayload = json_decode($response->getBody()->getContents());

        return $responsePayload;
    }

    private function stkPushStatusHealth($merchantID, $checkoutID, $email, $order)
    {
        for ($try = 1; $try <= 29; $try++) {

            $payload = [
                "MerchantRequestID" => $merchantID,
                "CheckoutRequestID" => $checkoutID
            ];

            $url = 'api/malipo/v1/stk/payment/confirmation';
            $server = config('mpesa.url'). $url;
            sleep(30);
        
            $payStat = self::eshop_health_stk_verify($payload, $server);
           

            if (isset($payStat->MpesaReceiptNumber)) {


                       // $company = $this->getLoggedInUserCompany();

                        $updateOrder = Order::where('invoice_no', $order)->first();
                        $updateOrder->update(['status' => 'paid']);
                        //update the payments table
                        Payment::where('order_id', $updateOrder->id)->update(['status' => 1]);

                        $user = Quotation::where('order_id', $order->id)->first();
                        $bookshop = BookShop::find($user->book_shop_id);
                        $bookshop->notify(new NotifyVendorOrderPaid($order));
                        $updateOrder->update([
                            'notify_admin' => true,
                            'status' => OrderStatus::PAID,
                                    
                        ]);
                      //  $this->makeInvoice($order, $company);

                        //Reduce Inventory Items
                        // $orderedItems = OrderItem::where('order_id', $updateOrder->id)->get();
                        // foreach ($orderedItems as $shopitems) {
                        //     DB::table('products')->where('id', $shopitems->product_id)->decrement('quantity', $shopitems->quantity);
                        // }

                        return Response::success('Congratulations, we have received your payment and will email your receipt shortly to ' . $email);
                   
            } else {
                return Response::error(['cancel' => 'You Cancelled the transaction from your phone. Please try again']);
            }
            return Response::error(['paymentStatusError' => 'System Error occured while checking your payment status. Please try again later']);
        }
    }
    
}
