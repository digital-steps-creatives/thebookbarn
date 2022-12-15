<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderCreated extends Mailable
{
    use Queueable, SerializesModels;
    public $invoice_no;
    public $orderId;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($invoice_no, $orderId)
    {
        $this->invoice_no = $invoice_no;
        $this->orderId = $orderId;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Order Created')->markdown('emails.orders.created');
    }
}
