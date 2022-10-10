<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Enums\NotificationType;
use App\Traits\MakeNotification;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewOrderNotification extends Notification
{
    use Queueable, MakeNotification;
    public $order;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('New order quotation request')
                    ->line("Invoice No: {$this->order->invoice_no}")
                    ->action('Send Quotation now', url("/vendors/orders/{$this->order->id}"))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return  $this->make([
            "title"    => "New order quotation request",
            "subtitle" => "Request No: {$this->order->invoice_no}",
            "link"     => "/vendors/orders/{$this->order->id}",
            "type"     => NotificationType::SUCCESS(),
        ]);
    }
    
    public function toBroadcast($notifiable)
    {
        return [];
    }
}
