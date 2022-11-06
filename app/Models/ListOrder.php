<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'book',
        'quantity',
        'customer_id',
        'rate',
        'amount',
        'order_id',
        'class',
        'level',
        'status',
        'order_number'
    ];

    protected $casts = [
        'book' => 'array'
    ];
}
