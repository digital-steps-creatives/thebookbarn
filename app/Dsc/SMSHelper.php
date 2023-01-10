<?php
namespace App\Dsc;

use AfricasTalking\SDK\AfricasTalking;

class SMSHelper
{

    public static function sendSMS($payload)
    {
        $username = env('AT_USERNAME');
        $api_key = env('AT_KEY');
        
        $AT = new AfricasTalking($username, $api_key);

        // Get one of the services
        $sms      = $AT->sms();

        // Use the service
        $result   = $sms->send([
            'to'      => $payload['recipient'],
            'message' => $payload['message']
        ]);

        return $result;

    }
}