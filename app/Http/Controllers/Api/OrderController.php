<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Dsc\OrderHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\OrderRequest;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
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
        $this->validate($request, [
            'customerList' => 'required|image|mimes:jpg,jpeg,png,gif,svg|max:2048',
        ]);
        $image = $request->file('customerList');
        $imgData = str_replace(' ','+',$image);
        $imgData =  substr($imgData,strpos($imgData,",")+1);
        $finalimgData = base64_decode($imgData);
        $file = fopen($filePath, 'w');
        fwrite($file, $imgData);
        fclose($file);
        $input['customerList'] = time().'.'.$image->getClientOriginalExtension();
        $destinationPath = public_path('/thumbnail');
        $imgFile = Image::make($image->getRealPath());
        $imgFile->resize(1200, 1200, function ($constraint) {
		    $constraint->aspectRatio();
		})->save($destinationPath.'/'.$input['customerList']);
        $destinationPath = public_path('/orders/images/uploads');
        $listName = $image->move($destinationPath, $input['customerList']);
        dd($listName);
   }
}
