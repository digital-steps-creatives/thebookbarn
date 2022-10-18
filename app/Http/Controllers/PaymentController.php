<?php

namespace App\Http\Controllers;

use App\Dsc\Helper;
use App\Models\Customer;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PaymentController extends Controller
{   
    

    
    /**
     * Lipa na M-PESA STK Push method
     * */
    public function customerMpesaSTKPush(Request $request)
    {
        $this->updateCustomer($request);
        $url = '/mpesa/stkpush/v1/processrequest';
        $data = [
            'BusinessShortCode' => 174379,
            'Password' => Helper::lipaNaMpesaPassword(),
            'Timestamp' => Carbon::rawParse('now')->format('YmdHms'),
            'TransactionType' => 'CustomerPayBillOnline',
            'Amount' => $request->amount,
            'PartyA' => Helper::formatMobileNumber($request->phone), // replace this with your phone number
            'PartyB' => 174379,
            'PhoneNumber' => Helper::formatMobileNumber($request->phone), // replace this with your phone number
            'CallBackURL' => env('APP_URL'),
            'AccountReference' => $request->invoice_no,
            'TransactionDesc' => "The Book Barn"
        ];
        $response = Helper::global_Curl_post($data, $url);
        $checkoutID = $response == null || $response->status == "failure" || isset($response->data->errorCode) ? [] : $response->data->CheckoutRequestID;
        if(!empty($checkoutID)){
            $payment_status = $this->stkPushStatus($checkoutID, Helper::generateAccessToken());
            $this->stkPushStatus($checkoutID, Helper::generateAccessToken());
        }
    }
    private function stkPushStatus($checkoutID, $token)
    {
        for ($try = 1; $try <= 29; $try++) {

            $payload = [
                "payment_reference" => $checkoutID,
                "payment_type" => "mpesa",
            ];

            try {
                $payStat = Helper::global_Curl_post($payload, $token, 'api/v1/payment/status');
                $statusCheck = ($payStat == null || $payStat->status == "failure") ? null : $payStat->data->status;

                if (!is_null($statusCheck)) {

                    //Pending transaction
                    if ($statusCheck == "0") {
                        if ($try == 29) {
                            return json_encode(['incomplete' => 'You transaction has timed out. Please try again']);
                        } else {
                            sleep(3);
                            continue;
                        }
                    } else {
                        //When paid
                        if ($statusCheck == "1") {
                            return "paid";
                        }

                        //When cancelled
                        if ($statusCheck == "2") {
                            return json_encode(['cancel' => 'You Cancelled the transaction from your phone. Please try again']);
                        }

                        //Partially Paid
                        if ($statusCheck == "3") {
                            return "partially-paid";
                        }
                    }
                }
                return json_encode(['paymentStatusError' => 'System Error occured while checking your payment status. Please try again later']);
            } catch (\QueryException $e) {
                Helper::errorLogs($this->requestTime, $e->getMessage(), $this->product, $this->payment_status_endpoint);
            } catch (\Throwable $e) {
                Helper::errorLogs($this->requestTime, $e->getMessage(), $this->product, $this->payment_status_endpoint);
            } catch (\Error $e) {
                Helper::errorLogs($this->requestTime, $e->getMessage(), $this->product, $this->payment_status_endpoint);
            } catch (\Exception $e) {
                Helper::errorLogs($this->requestTime, $e->getMessage(), $this->product, $this->payment_status_endpoint);
            }
        }
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
     * M-pesa Transaction confirmation method, we save the transaction in our databases
     */
    public function mpesaConfirmation(Request $request)
    {
        $content=json_decode($request->getContent());
        $mpesa_transaction = new Payment();
        $mpesa_transaction->trans_type = $content->TransactionType;
        $mpesa_transaction->mpesa_code = $content->TransID;
        $mpesa_transaction->paid_amount = $content->TransAmount;
        $mpesa_transaction->BillRefNumber = $content->BillRefNumber;
        $mpesa_transaction->invoice_number = $content->InvoiceNumber;
        $mpesa_transaction->save();
        // Responding to the confirmation request
        $response = new Response();
        $response->headers->set("Content-Type","text/xml; charset=utf-8");
        $response->setContent(json_encode(["C2BPaymentConfirmationResult"=>"Success"]));
        return $response;
    }

    /**
     * M-pesa Register Validation and Confirmation method
     */
    public function mpesaRegisterUrls()
    {
        $url = '/mpesa/c2b/v1/registerurl';
        $data = [
            'ShortCode' => "600141",
            'ResponseType' => 'Completed',
            'ConfirmationURL' => route('confirm.payment'),
            'ValidationURL' => route('validate.payment'),
        ];
       
        $response = Helper::global_Curl_post($data, $url);
        return response()->json([
            'status' =>$response
        ]);
    }

    private function updateCustomer($customer)
    {
        $user = Customer::where('email', auth()->user()->email)->first();
        $user->address = $customer['address'];
        $user->delivery_type  = $customer['delivery_type'];
        $user->name  = $customer['name'];
        $user->email  = $customer['email'];
        $user->phone  = $customer['phone'];
        return $user->save();
    }
   
}
