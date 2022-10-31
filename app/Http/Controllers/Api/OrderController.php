<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Dsc\OrderHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\OrderRequest;
use App\Models\ImageOrder;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

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


   public function queueOrder(Request $request)
   {    
    
        
        $img = $request->photoInput;
        $folderPath = "images/orders/";
        
        $image_parts = explode(";base64,", $img);
        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        
        $image_base64 = base64_decode($image_parts[1]);
        $fileName = uniqid() . '.jpg';
        
        $file = $folderPath . $fileName;
        $imageOrder = new ImageOrder();
        $imageOrder->image = $file;
        $imageOrder->status = 'pending transfer';
        $imageOrder->customer_id = auth()->user()->id;
        $imageOrder->save();
       Storage::put($file, $image_base64);
       return;
   }
}
