<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function home()
    {   
        return Inertia::render('Home', [
            'listavailablebooks' => Book::with('subject', 'classlevel')->where('availability', 1)->where('status', 1)->paginate(8)
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
}
