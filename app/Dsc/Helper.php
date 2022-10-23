<?php

namespace App\Dsc;

use App\Models\BookShop;
use App\Models\Customer;
use Carbon\Carbon;

class Helper
{

    public function __construct()
    {
        $this->requestTime = Carbon::now()->toDateTimeString();
    }
    /**
     * Die dump the code for api
     */
    public function ddcors(...$args)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: *');
        dd(...$args);
    }

    /**
     * Generates formated id with given value
     *
     * @param int
     * @return string
     */
    public function generateReadableId($value, $prefix = null, $length = 7)
    {
        return $prefix . \str_pad($value, $length, "0", STR_PAD_LEFT);
    }


    /**
     * Generate a formated purchase order number
     *
     * @return string
     */
    public function generateReadableIdWithDate($last, $prefix, $length = 5)
    {
        //Set initial value
        $value = 1;

        //Set the prefix with date
        $finalPrefix = $prefix . Carbon::now()->format('ym');

        //Parse the last value
        $lastValue = intval(substr($last, strlen($finalPrefix), $length));

        //Parse the last month
        $lastMonth = intval(substr($last, (strlen($prefix) + 2), 2));

        //Set the value
        if ($lastMonth == Carbon::now()->month) {
            $value = $lastValue + 1;
        }

        return $this->generateReadableId($value, $finalPrefix, $length);  // POF200700001
    }

   
    public static function isVendorActive($email) : bool
    {   
            $business = BookShop::whereEmail($email)->IsActive()->exists();

            if($business)
            {
                return true;
            }
            return false;
    }

    public static function isCustomerActive($email) : bool
    {   
            $customer = Customer::whereEmail($email)->IsActive()->exists();

            if($customer)
            {
                return true;
            }
            return false;
    }

    //Format phone number to mpesa format
    public static function formatMobileNumber($mobile_number)
    {
        $trimed_number = preg_replace('/\s+/', '', $mobile_number);
        $first_digit = substr($trimed_number, 0, 1);
        if ($first_digit == "0") {
            $number_without_zero = mb_substr($trimed_number, 1);
            $formated_number = "254" . $number_without_zero;
            return $formated_number;
        } elseif ($first_digit == "7") {
            $formated_number = "254" . $trimed_number;
            return $formated_number;
        } elseif ($first_digit == "2") {
            $formated_number = $trimed_number;
            return $formated_number;
        } elseif ($first_digit == "+") {
            $formated_number = substr($trimed_number, 1);
            return $formated_number;
        } else {
            return $trimed_number;
        }
    }
    public static function global_Curl_post($data, $url)
    {
        $server = env('SAFARICOM_API') !== null ? env('SAFARICOM_API') : 'https://sandbox.safaricom.co.ke';
        $token = self::generateAccessToken();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, ($server . '/' . $url));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json','Authorization:Bearer '.$token));
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 3000);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);

        $response = json_decode(curl_exec($ch));

        //dd($response);

        curl_close($ch);

        return $response;
    }
    public static function generateAccessToken()
    {
        $consumer_key= 'OSGHjreXoAoBnlJsfYFA7lRA4soUaVPz';
        $consumer_secret= 'kmriYXlBh81p3l6J';
        $credentials = base64_encode($consumer_key.":".$consumer_secret);
        $url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array("Authorization: Basic ".$credentials));
        curl_setopt($curl, CURLOPT_HEADER,false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $curl_response = curl_exec($curl);
        $access_token=json_decode($curl_response);
        return $access_token->access_token;
    }

    /**
     * Lipa na M-PESA password
     * */
    public static function lipaNaMpesaPassword()
    {
        $lipa_time = Carbon::rawParse('now')->format('YmdHms');
        $passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
        $BusinessShortCode = 174379;
        $timestamp =$lipa_time;
        $lipa_na_mpesa_password = base64_encode($BusinessShortCode.$passkey.$timestamp);
        return $lipa_na_mpesa_password;
    }
    

    public static function customLogs($route, $referenceNo, $requestTime, $requestAll, $request, $response)
    {
        /*try {
            $data = new CustomLogs();
            $data->route = $route;
            $data->reference_no = $referenceNo;
            $data->request = $request;
            $data->request_all = $requestAll;
            $data->response = $response;
            $data->save();

            //TODO:: send text and email to developer
        } catch (QueryException $e) {
        } catch (\Exception  $e) {
        }*/
    }

    static function success($message, $name, $data, $requestTime)
    {
        return $response = [
            'request_time' => $requestTime,
            'response_time' => Carbon::now()->toDateTimeString(),
            'status' => 'success',
            'message' => $message,
            $name => $data ?: []
        ];
    }

    static function failure($message, $requestTime)
    {
        return $response = [
            'request_time' => $requestTime,
            'response_time' => Carbon::now()->toDateTimeString(),
            'status' => 'failure',
            'message' => $message
        ];
    }

}
