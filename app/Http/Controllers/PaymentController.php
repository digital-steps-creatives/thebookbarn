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
use SmoDav\Mpesa\Laravel\Facades\STK;
use SmoDav\Mpesa\Laravel\Facades\Registrar;

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
        $response = STK::push($finalAmount, $phone, $quoteReference, 'Payment for Order: ' . $quoteReference, 'staging');
        $order = Order::where('invoice_no', $request->invoice_no)->first();
        $order->update([
            'address' => $request->address,
            'delivery_fee' => $request->delivery_fee,
            'delivery_type' => $request->delivery_type
        ]);
        if (isset($response->CheckoutRequestID)) {
            $py = Payment::firstOrNew(['mpesa_checkout_request_id' => $response->CheckoutRequestID]);
            $py->BillRefNumber = $quoteReference;
            $py->invoice_number = $quoteReference;
            $py->payment_mode = 'mpesa';
            $py->amount = $finalAmount;
            $py->status = 0;//0:Not Paid, 1:Paid, 2:Cancelled
            $py->mpesa_checkout_request_id = $response->CheckoutRequestID;
            $py->customer_id = $customerId->id;
            $py->trans_type = OrderStatus::TRANSACTION_TYPE;
            $py->order_id = $order->id;
            $py->save();
        }
        if(!empty($response)){
            
            return response()->json([
                'checkoutId' => $response->CheckoutRequestID,
                'message' => 'STK push mpesa payment initiated successfully, check your phone',
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

        if ($validator->fails()) {
            $response = Helper::failureException("Validation Failed", $validator->errors()->all(), $this->requestTime);
        } else {
            if (isset($request->checkoutId) ) {
                $column = 'mpesa_checkout_request_id';
                //TODO::call mpesa validate

                $pay = Payment::where($column, $request->checkoutId)->first();

                if (is_null($pay)) {
                    $response = response()->json(Helper::failure("Payment with the provided reference number could not be found", $this->requestTime));
                    return $response;
                }

                $mpesaResponse = $this->mPesaValidate($request->checkoutId, $pay);
                //dd($mpesaResponse);
                $paymenStatus = $mpesaResponse;

                if ($mpesaResponse == 0) {
                    $message = 'Not Paid';
                    $ammountPaid = null;
                } else if ($mpesaResponse == 1) {
                    $message = 'Paid';
                    $ammountPaid = $pay->amount;
                    //notify vendor that their order has been accepted 
                    $order = Order::where('invoice_no', $request->invoice_no)->first();
                    $user = Quotation::where('order_id', $order->id)->first();
                    $bookshop = BookShop::find($user->book_shop_id);
                    $bookshop->notify(new NotifyVendorOrderPaid($order));
                    $order->update([
                        'notify_admin' => true,
                        'status' => OrderStatus::PAID,
                        
                    ]);
                } else if ($mpesaResponse == 2) {
                    $message = 'Cancelled';
                    $ammountPaid = null;
                }
            } 
            
            $data = ['status' => $paymenStatus, 'message' => $message, 'amount_paid' => $ammountPaid];
            $response = response()->json(Helper::success('Payment Status', 'data', $data, $this->requestTime));
        }
        Helper::customLogs(url()->current(), $this->reference_number, $this->requestTime, json_encode($request->all()), $request, $response);
        return $response;
    }

    private function mPesaValidate($mpesa_checkout_request_id, $payId)
    {
        $mpesaAccount = 'staging';
        $response = STK::validate($mpesa_checkout_request_id, $mpesaAccount);
        if (isset($response->ResponseCode)) {
           
            if ($response->ResultCode == 0) {
                $update = Payment::where('id', $payId->id)->update(array('status' => 1));
                $order = Order::where('id', $payId->order_id)->update(array('status' => OrderStatus::PAID));
                $response = 1;
            } else if ($response->ResultCode == 1032) {//request cancelled by user
                $update = Payment::where('id', $payId->id)->update(array('status' => 2));
                
                $response = 2;
            } else if ($response->ResultCode == 1001) {//Unable to lock subscriber, a transaction is already in process for the current subscriber
                $response = 0;
            }else{
                $response=0;
            }
        }
        if (isset($response->errorCode)) {
            if ($response->errorCode == "500.001.1001") {//The transaction is being processed
                $response = 0;
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

   
   
    public function resData(Request $request)
    {
        $response = json_decode($request->getContent());
        Log::info(json_encode($response));
        // $resData =  $response->Body->stkCallback->CallbackMetadata;
        // $reCode =$response->Body->stkCallback->ResultCode;
        // $resMessage =$response->Body->stkCallback->ResultDesc;
        // $amountPaid = $resData->Item[0]->Value;
        // $mpesaTransactionId = $resData->Item[1]->Value;
        // $paymentPhoneNumber =$resData->Item[4]->Value;
        // //replace the first 254 with 0
        // $formatedPhone = str_replace("254","0",$paymentPhoneNumber);
        // Log::info($response);
        // Log::info($resData);
        // $user = Customer::where('phone', $formatedPhone)->first();
        // $trans = Payment::where('user_id', $user->id)->where('status', 0)->first();
        // $transId = $trans->id;
        // $payment = new Payment;
        // $payment->amount = $amountPaid;
        // $payment->trans_id =  $transId;
        // $payment->user_id = $user->id;
        // $payment->mpesa_trans_id = $mpesaTransactionId;
        // $payment->phone = $formatedPhone;
        // $payment->save();
        // $trans->status = 1;
        // $trans->save();

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
     * J-son Response to M-pesa API feedback - Success or Failure
     */
    public function createValidationResponse($result_code, $result_description){
        $result=json_encode(["ResultCode"=>$result_code, "ResultDesc"=>$result_description]);
        $response = new Response();
        $response->headers->set("Content-Type","application/json; charset=utf-8");
        $response->setContent($result);
        return $response;
    }
    /**
     *  M-pesa Validation Method
     * Safaricom will only call your validation if you have requested by writing an official letter to them
     */
    public function mpesaValidation(Request $request)
    {
        $result_code = "0";
        $result_description = "Accepted validation request.";
        return $this->createValidationResponse($result_code, $result_description);
    }

    /**
     * M-pesa Register Validation and Confirmation method
     */
    public function mpesaRegisterUrls()
    {
        $conf = 'https://1d5a-154-154-35-15.eu.ngrok.io/api/v1/payments/responses';
        $val = 'https://1d5a-154-154-35-15.eu.ngrok.io/api/v1/payments/validation';

        return Registrar::register(600000)
        ->onConfirmation($conf)
        ->onValidation($val)
        ->submit();
    }
   
}
