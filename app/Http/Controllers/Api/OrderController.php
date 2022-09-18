<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Dsc\OrderHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\OrderRequest;
use Illuminate\Support\Facades\Auth;

class OrderController extends BaseController
{

   /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        if ($request->has('perPage')) {
            $success['listOrders'] = Order::with('customer')->where('customer_id',  Auth::user()->id)->get();
            return $this->sendResponse($success, 'successfully loaded');
        }
        $success['listOrders'] = Order::with('customer', 'orderItems')->where('customer_id', Auth::user()->id)->get();
        return $this->sendResponse($success, 'successfully loaded');
    }


   public function store(OrderRequest $request, OrderHandler $orderHandler)
   {
        $success = DB::transaction(function () use ($request, $orderHandler) {
            $success['order'] = $orderHandler->createOrder($request);
            return $success;

        });


        return $this->sendResponse($success, 'Order created successfully');
   }
}
