<?php

namespace App\Models;

use App\Traits\HasInvoiceNo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory,  SoftDeletes, HasInvoiceNo;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['invoice_no', 'customer_id', 'status', 'note'];

    /**
     * Set the model readable id length
     *
     * @var int
     */
    protected static $invoiceNoLength = 5;

    /**
     * Set the model readable id prefix
     *
     * @var string
     */
    public static function invoiceNoPrefix()
    {
        return "TBB";
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }


    /**
     * Scope a query to only the logged in custoemr.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCustomer($query)
    {
        return $query->where('customer_id', auth()->user()->id);
    }
}
