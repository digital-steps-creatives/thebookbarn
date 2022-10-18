<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'paid_amount',
        'balance',
        'mpesa_account',
        'mpesa_checkout_request_id',
        'merchant_request_id',
        'mpesa_code',
        'BillRefNumber',
        'invoice_number',
        'trans_type',
        'status',
        'mpesa_status',
        'mpesa_error_code',
        'mpesa_call_back_object',
    ];
}
