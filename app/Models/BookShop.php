<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookShop extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'business_name',
        'type',
        'address',
        'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
