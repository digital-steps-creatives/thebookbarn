<?php

namespace App\Traits;

use App\Models\Order;
use App\Events\CreateOrder;

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
        event(new CreateOrder($order));
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
        $items = collect($request->input('items'));
        if (isset($items->pluck('id')[0])) {
            $order->orderItems()->whereNotIn('id', $items->pluck('id')->reject(function ($id) {
                return empty($id);
            }))->delete();
        } else {
            $order->orderItems()->delete();
        }

        $items->each(function ($item) use ($order) {
            $order->orderItems()->updateOrCreate(
                [
                    'id' => $item['id'] ?? null
                ],
                [   
                    'rate' => $item['amount'],
                    'quantity' =>  $item['quantity'],
                    'amount'   =>  $item['amount']
                ]
            );
        });

        // Update totals
        $order->updateTotals();

        return $order;
    }
}
