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
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($invoice_no)
    {
        $this->invoice_no = $invoice_no;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.orders.created', [
           // 'url' => $this->orderUrl,
            'invoice_no' => $this->invoice_no
        ]);
    }
}
