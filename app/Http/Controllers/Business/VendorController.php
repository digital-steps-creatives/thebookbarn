<?php

namespace App\Http\Controllers\Business;

use App\Dsc\Helper;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\BookShop;
use App\Dsc\OrderHandler;
use App\Models\OrderItem;
use App\Enums\OrderStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;

class VendorController extends Controller
{
    public function dashboard()
    {
        if(Auth::guard('vendors')->check()){
            return Inertia::render('Business/Dashboard');
        }
  
        return redirect("login")->withSuccess('You are not allowed to access');
    }

    public function register()
    {
        return Inertia::render('Business/Auth/Register');
    }

    public function login()
    {
        return Inertia::render('Business/Auth/Login');
    }

    public function processLogin(Request $request)
    {   
        $credentials = $request->except(['_token']);
        
        if(Helper::isVendorActive($request->email))
        {
            if(Auth::guard('vendors')->attempt($credentials))
            {   
                return redirect()->intended(route('vendor.dashboard'));
            }
            return redirect()->route('login')->with('message','Credentials not matched in our records!');
        }
        return redirect()->route('login')->with('message','You are not an active vendor!');
    }

    public function processRegister(Request $request)
    {   
        
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:book_shops',
            'password' => 'required|min:6',
        ]);

        $data = $request->all();
        $check = $this->create($data);
         
        return redirect()->intended(route('vendor.dashboard'))->withSuccess('You are now registered Successfully');
    }

    public function create(array $data)
    {
      return BookShop::create([
        'business_name' => $data['name'],
        'contact_name' => $data['contact_name'],
        'password' => Hash::make($data['password']),
        'type' => $data['type'],
        'address' => $data['address'],
        'email' => $data['email'],
        'status' => 'active',
        'terms' => $data['terms']
      ]);
    }

    public function markNotificationasRead()
    {
        Auth::guard('vendors')->user()->unreadNotifications->markAsRead();
        return redirect()->back();
    }

    public function orders()
    {
        return Inertia::render('Business/Orders', [
            'orders' => Order::with('customer', 'orderItems')->where('status', OrderStatus::WAITINGQUOTATIONS)->get()
        ]);
    }

    public function makeOrder($order)
    {   
        $order = Order::where('id', $order)->where('status', OrderStatus::WAITINGQUOTATIONS)->first();
        return Inertia::render('Business/Generate-Quotation',[
            'order' => $order->load('customer', 'orderItems.product')
        ]);
    }

    public function saveQuotation(Request $request, OrderHandler $orderHandler)
    {   
        $order = Order::find($request->order['id']);
        DB::transaction(function () use ($request, $orderHandler, $order) {
            $orderHandler->updateOrder($order, $request);
        });
       
        $order->update([
            'note' => $request->note,
            'grand_total' => $request->grand_total,
            'sub_total' => $request->sub_total,
            'total_discount' => $request->total_discount,
            'status' => OrderStatus::PENDINGCUSTOMER
        ]);
       return redirect()->route('orders.index')->with('success', 'Quotation created and sent successfully');
    }
}
