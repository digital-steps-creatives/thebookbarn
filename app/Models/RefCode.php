<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RefCode extends Model
{
    use HasFactory;
    protected $fillable= [
        'affiliate_id',
        'ref_code',
        'status',
    ];

    public function scopeAffiliate($query)
    {
        return $query->where('affiliate_id', auth()->guard('affiliates')->user()->id);
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function affiliate()
    {
        return $this->belongsTo(Affiliate::class);
    }
}
