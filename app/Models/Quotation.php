<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quotation extends Model
{
    use HasFactory;

    protected $fillable = [
        'status', 
        'note', 
        'grand_total', 
        'sub_total', 
        'total_discount',
        'order_id',
        'book_shop_id',
        'tax',
        'commission'
    ];
}
