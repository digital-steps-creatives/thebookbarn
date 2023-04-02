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
use App\Models\BookShop;
use App\Models\Customer;
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
            $success['order'] = $order;
            return $success;

        });
            event(new CreateOrder($success['order']));
            //send an sms to admin notify about the order
            
            $this->sendSMStoAdmin($success['order']);
            //notify the vendors via sms channel
            $this->sendSMStoVendors($success['order']);
            try {
                $invoice_no = $success['order']->invoice_no;
                $orderId = $success['order']->id;
                $customer = Customer::find($request->customer_id);
               
                $sendemail = Mail::to($customer->email)->send(new OrderCreated($invoice_no, $orderId));
                
               
            } catch (\Throwable $th) {
                //throw 
                dd($th);
            }
        
        return $this->sendResponse($success, 'Order created successfully');
       
   }

   /**
     * Update the order
     *
     * @param \App\Http\Requests\OrderRequest $request
     * @param \App\Models\Order               $order
     * @param \App\Library\OrderHandler       $orderHandler
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(OrderRequest $request, Order $order, OrderHandler $orderHandler)
    {
        // if ($order->status != OrderStatus::PENDING()) {
        //     return Response::unauthorized('Sorry, you can not update it now.', 403);
        // }
        $success = DB::transaction(function () use ($request, $orderHandler, $order) {
            $orderHandler->updateOrder($order, $request);
        });

        return $this->sendResponse($success, 'Order updated successfully');
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


   public function sendSMStoVendors($payload)
   {
        $vendorscellPhone = BookShop::where('status', 'active')->select('email', 'cellphone')->get();
        if ($vendorscellPhone) {
            foreach ($vendorscellPhone as $phone) {
                $SMSpayload = [
                    'message' => env('APP_NAME'). '- A Customer has requested for a quotation for Order ID '. $payload->invoice_no . ' Thank you for using '. env('APP_NAME'). route('view.order.status', $payload->id),
                    'recipient' => Helper::formatMobileNumber($phone->cellphone)
                ];
                $sendsms= SMSHelper::sendSMS($SMSpayload);
            }
            return;
        }
   }


   public function sendSMStoAdmin($payload)
   {    
        
        $adminsCellphone = User::whereIn('role', ['administrator', 'super-admin', 'manager'])->select('cellphone', 'email')->get();
        if ($adminsCellphone) {
            foreach ($adminsCellphone as $phone) {
                $SMSpayload = [
                    'message' => 'Hello there, a quotation request has been placed with order number '. $payload->invoice_no,
                    'recipient' => Helper::formatMobileNumber($phone->cellphone)
                ];
                $sendsms= SMSHelper::sendSMS($SMSpayload);
            }
            return;
        }
   }
}
