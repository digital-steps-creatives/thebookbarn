<?php

namespace App\Listeners;

use App\Models\BookShop;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\NewOrderNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class SendNewOrderNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        Log::info($event->order);
        $business = BookShop::where('status','active')->get();
        Notification::send($business, new NewOrderNotification($event->order));
        //Notification::send($business, new NewOrderNotification($event->order));
    }
}
