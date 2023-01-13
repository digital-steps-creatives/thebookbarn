<?php

namespace App\Traits;

use App\Facades\Helper;

trait HasInvoiceNo
{

    public static function bootHasInvoiceNo()
    {
        /**
         * Set the invoice no after the resource created
         *
         * @return void
         */
        static::creating(function ($model) {
            $last = null;

            if (self::all()->last()) {
                $last = self::all()->last()->invoice_no;
            }

            $model->invoice_no = Helper::generateReadableIdWithDate($last, self::invoiceNoPrefix(), self::$invoiceNoLength);
        });
    }
}
