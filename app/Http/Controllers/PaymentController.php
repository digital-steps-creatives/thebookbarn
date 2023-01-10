<?php

namespace App\Http\Controllers;

use Validator;
use Carbon\Carbon;
use App\Dsc\Helper;
use App\Models\Order;
use App\Models\Payment;
use App\Models\BookShop;
use App\Models\Customer;
use Faker\Provider\Uuid;
use App\Models\Quotation;
use Akaunting\Money\Money;
use App\Enums\OrderStatus;
use App\Notifications\NotifyVendorOrderPaid;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

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
        $url = '/stkpush/v1/processrequest';
        $payload = [
            'BusinessShortCode' => config('mpesa.shortcode'),
            'Password' => Helper::lipaNaMpesaPassword(),
            'Timestamp' => date('YmdHis'),
            'TransactionType' => 'CustomerPayBillOnline',
            'Amount' => $finalAmount,
            'PartyA' => $phone,
            'PartyB' => config('mpesa.shortcode'),
            'PhoneNumber' => $phone,
            'CallBackURL' => route('mpesa.callback'),
            'AccountReference' => $quoteReference,
            'TransactionDesc' => 'Payment for Order: ' .$quoteReference
        ];
        $response = Helper::global_Curl_post($payload, $url);
        
        $order = Order::where('invoice_no', $request->invoice_no)->first();
        $order->update([
            'address' => $request->address,
            'delivery_fee' => $request->delivery_fee,
            'delivery_type' => $request->delivery_type
        ]);
        $checkResponse = json_decode($response);
        //dd(($checkResponse->CheckoutRequestID));
        if (isset($checkResponse->CheckoutRequestID)) {
            $py = Payment::firstOrNew(['mpesa_checkout_request_id' => $checkResponse->CheckoutRequestID]);
            $py->BillRefNumber = $quoteReference;
            $py->invoice_number = $quoteReference;
            $py->payment_mode = 'mpesa';
            $py->amount = $finalAmount;
            $py->status = 0;//0:Not Paid, 1:Paid, 2:Cancelled
            $py->mpesa_checkout_request_id = $checkResponse->CheckoutRequestID;
            $py->customer_id = $customerId->id;
            $py->trans_type = OrderStatus::TRANSACTION_TYPE;
            $py->order_id = $order->id;
            $py->save();
        }
        if(!empty($checkResponse)){
            
            return response()->json([
                'checkoutId' => $checkResponse->CheckoutRequestID,
                'message' => 'Mpesa Express initiated successfully, check your phone',
                'status' => 200
            ]);
        }
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
        $response = Helper::global_Curl_post($payload, $url);
        $checkResponse = json_decode($response);
        $order = Order::where('invoice_no', $request->invoice_no)->first();
        if (isset($checkResponse->ResponseCode)) {
            if ($checkResponse->ResultCode =="0") {
                //notify vendor that their order has been accepted 
                
                $user = Quotation::where('order_id', $order->id)->first();
                $bookshop = BookShop::find($user->book_shop_id);
                $bookshop->notify(new NotifyVendorOrderPaid($order));
                $update = Payment::where('order_id', $order->id)->update(array('status' => 1));
                $order->update([
                    'notify_admin' => true,
                    'status' => OrderStatus::PAID,
                            
                ]);
                return response()->json([
                    'status' => 1,
                    'message' => $checkResponse->ResultDesc
                ]);
            } elseif ($checkResponse->ResultCode =="1032") {
                $update = Payment::where('order_id', $order->id)->update(array('status' => 2));
                return response()->json([
                    'status' => 1032,
                    'message' => $checkResponse->ResultDesc
                ]);
            } 
        }
        if (isset($checkResponse->errorCode)) {
            if ($checkResponse->errorCode == "500.001.1001") {//The transaction is being processed
                $response = 0;
                return response()->json([
                    'status' => 5,
                    'message' => 'The transaction is being processed'
                ]);
            }
        }
       
        return $response;               
    } 

    public function callback(Request $request) {

        $response = json_decode($request->getContent());
        Log::info(json_encode($response));
        $resData = $response->Body->stkCallback->CallbackMetadata;
        $resCode = $response->Body->stkCallback->ResultCode;
        $resMessage = $response->Body->stkCallback->ResultDesc;
        $amountPaid = $resData->Item[0]->Value;
        $mpesaTransactionId = $resData->Item[1]->Value;
        $paymentPhoneNumber = $resData->Item[3]->Value;
        return;
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

    /**
     *  M-pesa Validation Method
     * Safaricom will only call your validation if you have requested by writing an official letter to them
     */
    /**
     * Register URL
     */
    public function registerURLS()
    {
        $body = array(
            'ShortCode' => config('mpesa.shortcode'),
            'ResponseType' => 'Completed',
            'ConfirmationURL' => route('confirmation.url'),
            'ValidationURL' => route('validation.url')
        );

        $url = '/c2b/v1/registerurl';
        $response = Helper::global_Curl_post($body, $url);

        return response()->json([
            'status' => 200,
            'message' => $response
        ]);
    }


    /**
     * M-pesa Register Validation and Confirmation method
     */
    public function validation(Request $request)
    {
        Log::info('Validation endpoint hit');
        Log::info($request->all());
        return;
    }

    public function confirmation(Request $request){
        Log::info('Confirmation endpoint hit');
        Log::info($request->all());
        return;
    }
   
}
