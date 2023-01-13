<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default Account
    |--------------------------------------------------------------------------
    |
    | This is the default account to be used when none is specified.
    */

    'paybill' => env('MPESA_PAYBILL_NUMBER', '4102381'),
    'shortcode' => env('MPESA_PAYBILL_NUMBER', '4102381'),
    'passkey' => env('MPESA_PASS_KEY', '796bd1d24c267779779bca494b51bd924d513ad205d658334576053cb2737913'),
    'type' => env('MPESA_ENV', 'live'),
    'consumer_key' => env('MPESA_CONSUMER_KEY', '8AguWBcPeDx0y20IZFjvDGfaAX1vDvTK'),
    'consumer_secret' => env('MPESA_CONSUMER_SECRET', 'vMh3HsCN4jUeMEDO'),
    'url' => env('MPESA_URL', '')
];
