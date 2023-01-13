<?php

namespace App\Dsc;

use Carbon\Carbon;
use GuzzleHttp\Client;
use App\Models\BookShop;
use App\Models\Customer;
use Illuminate\Support\Facades\Http;

class Helper
{
    public $requestTime;

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

    public static function global_Curl_post($data, $url, $method)
    {
        $server = config('mpesa.url'). $url;
        $token = self::generateAccessToken();
        //dd($data);
        $curl_response = Http::withToken($token)->$method($server, $data);
        return $curl_response->body();
    }
    
    public static function generateAccessToken()
    {
        $consumer_key= config('mpesa.consumer_key');
        $consumer_secret= config('mpesa.consumer_secret');
        
        $url = config('mpesa.type') == 'sandbox'
        ? 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
        : 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

        
        $response = Http::withBasicAuth($consumer_key, $consumer_secret)->get($url);
       

        // return $response;
        return $response['access_token'];
    }

    /**
     * Lipa na M-PESA password
     * */
    public static function lipaNaMpesaPassword()
    {
        $lipa_time = date('YmdHis');
        $passkey = config('mpesa.passkey');
        $BusinessShortCode = config('mpesa.shortcode');
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
