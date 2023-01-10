<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default Account
    |--------------------------------------------------------------------------
    |
    | This is the default account to be used when none is specified.
    */

    'paybill' => env('MPESA_PAYBILL_NUMBER', '600988'),
    'shortcode' => env('MPESA_PAYBILL_NUMBER', '600988'),
    'passkey' => env('MPESA_PASS_KEY', ''),
    'type' => env('MPESA_ENV', 'sandbox'),
    'consumer_key' => env('MPESA_CONSUMER_KEY', 'OSGHjreXoAoBnlJsfYFA7lRA4soUaVPz'),
    'consumer_secret' => env('MPESA_CONSUMER_SECRET', 'kmriYXlBh81p3l6J'),
    'url' => env('MPESA_URL', '')
];
