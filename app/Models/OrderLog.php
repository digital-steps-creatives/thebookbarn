<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrderLog extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['order_id', 'order_item_id', 'action', 'attribute', 'old_value', 'new_value', 'description'];

    /**
     * Get date as formated
     */
    public function getDateFormattedAttribute()
    {
        return $this->createdAt->format('d M, Y h:i A');
    }
}
