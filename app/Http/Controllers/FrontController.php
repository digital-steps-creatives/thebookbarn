<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Order;
use App\Dsc\OrderHandler;
use App\Enums\OrderStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class FrontController extends Controller
{
    public function home()
    {   
        return Inertia::render('Home', [
            'listavailablebooks' => Book::with('subject', 'classlevel')->where('availability', 1)->where('status', 1)->take(4)->get()
        ]);
    }

    public function cart()
    {
        return Inertia::render('Cart');
    }

    public function Orders()
    {
        return Inertia::render('Orders',[
            'myorders' => Order::with('customer', 'orderItems')->where('customer_id',  auth()->user()->id)->get()
        ]);
    }

    public function viewOrder($order)
    {   
        $order = Order::where('id', $order)->where('status', OrderStatus::PENDINGCUSTOMER)->first();
        return Inertia::render('View-Quotation',[
            'order' => $order->load('customer', 'orderItems.product')
        ]);
    }

    public function acceptOrder(Request $request, OrderHandler $orderHandler)
    {   
        $order = Order::where('id',  $request->order)->first();
        DB::transaction(function () use ($request, $orderHandler, $order) {
            $orderHandler->updateOrder($order, $request);
        });
        $order->status = OrderStatus::PENDINGPAYMENT;
        $order->is_invoice = 1;
        $order->grand_total = $request->grand_total;
        $order->sub_total = $request->sub_total;
        $order->total_discount = $request->total_discount;
        $order->save();
        return response()->json([
            'status' => 200,
            'message' => 'Quotation converted to Invoice Successfully',
            'order'=> $order
        ]);
    }

    public function checkout()
    {
        return Inertia::render('Checkout',[
            'user' => Auth::user()
        ]);
    }

    public function getOrder($order)
    {   
        $orders = Order::with('orderItems')->find($order);
        return response()->json([
            'order' => $orders->load('orderItems.product')
        ]);
    }
}
