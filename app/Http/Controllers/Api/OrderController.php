<?php

namespace App\Http\Controllers\Api;

use App\Dsc\Helper;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Order;
use App\Dsc\SMSHelper;
use App\Dsc\OrderHandler;
use App\Enums\OrderStatus;
use App\Mail\OrderCreated;
use App\Models\ImageOrder;
use App\Events\CreateOrder;
use App\Imports\OrderImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\OrderRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
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
            $order = $orderHandler->createOrder($request);
            event(new CreateOrder($order));
            //send an sms to admin
            $adminsCellphone = User::whereIn('role', ['administrator', 'super-admin', 'manager'])->select('cellphone', 'email')->get();
            
            foreach ($adminsCellphone as $phone) {
                $payload[] = [
                    'message' => 'Hello there, a quotation request has been placed with order number '. $order->invoice_no,
                    'recipient' => Helper::formatMobileNumber($phone->cellphone)
                ];
            }
            
            try {
                $invoice_no = $order->invoice_no;
                Mail::to(auth()->user()->email)->send(new OrderCreated($invoice_no));
                SMSHelper::sendSMS($payload);
                
            } catch (\Throwable $th) {
                //throw $th;
            }
            
            $success['order'] = $order;
            return;

        });


        return response()->json([
            'message' => 'Order created successfully',
            'status' => 200
        ]);
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
        $imageOrder = new Order();
        $imageOrder->image = $file;
        $imageOrder->status = OrderStatus::PENDINGADMIN;
        $imageOrder->customer_id = auth()->user()->id;
        $imageOrder->order_type = 'image';
        $imageOrder->save();
        Storage::put($file, $image_base64);
       return;
   }

   public function importList(Request $request)
   {
    
        Excel::import(new OrderImport, $request->file('customerExcel'));
           
        return back();
   }

   public function viewOrder($order)
   {
        return Inertia::render('ViewOrder', [
            'order' => Order::with('customer', 'orderItems', 'orderLogs')->find($order)
        ]);
   }
}
