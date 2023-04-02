<?php

namespace App\Traits;

use App\Dsc\SMSHelper;
use App\Enums\OrderStatus;
use App\Models\Order;
use App\Events\CreateOrder;
use App\Models\User;

trait InteractsWithOrder
{
    /**
     * Create a new order with given data
     *
     * @param \App\Http\Requests\OrderRequest $request
     * @return \App\Models\Order
     */
    public function createOrder($request)
    {
        $customerId = $request->customer_id ?? $this->createCustomer($request);
        $order = Order::create([
            'customer_id'         => $customerId,
            'note'               => $request->note,
        ]);

        foreach ($request->orderItems as $item) {
            $order->orderItems()->create(
                [
                    'book_id'        => $item['book_id'],
                    'quantity'         => $item['quantity'],
                ]
            );
        }

        // Update totals
        //$order->updateTotals();
        
        return $order;
    }

    /**
     * Update the order
     *
     * @param \App\Models\Order               $order
     * @param \App\Http\Requests\OrderRequest $request
     * @return \App\Models\Order
     */
    public function updateOrder(Order $order, $request)
    {
        //dd($request->all());
        $items = collect($request->input('items'));
        if (isset($items->pluck('id')[0])) {
            $order->orderItems()->whereNotIn('id', $items->pluck('id')->reject(function ($id) {
                return empty($id);
            }))->delete();
        } else {
            $order->orderItems()->delete();
        }

        foreach ($request->orderItems as $item) {
            $order->orderItems()->create(
                [
                    'book_id'        => $item['book_id'],
                    'quantity'         => $item['quantity'],
                ]
            );
        }
        $order->update([
            'status' => OrderStatus::WAITINGQUOTATIONS
        ]);

        // Update totals
        //$order->updateTotals();

        return $order;
    }
}
