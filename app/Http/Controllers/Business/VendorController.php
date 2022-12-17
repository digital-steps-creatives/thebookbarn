<?php

namespace App\Http\Controllers\Business;

use App\Dsc\Helper;
use Inertia\Inertia;
use App\Models\Order;
use App\Dsc\SMSHelper;
use App\Models\BookShop;
use App\Models\Customer;
use App\Dsc\OrderHandler;
use App\Models\OrderItem;
use App\Enums\OrderStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Quotation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\StatefulGuard;

class VendorController extends Controller
{

     /**
     * The guard implementation.
     *
     * @var \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected $guard;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
     * @return void
     */
    public function __construct(StatefulGuard $guard) {
        $this->guard = $guard;
    }

    public function dashboard()
    {
        if(Auth::guard('vendors')->check()){
            return Inertia::render('Business/Dashboard');
        }
  
        return redirect()->route('login.vendor')->withSuccess('You are not allowed to access');
    }

    public function register()
    {
        
        if (Auth::guard('administrator')->user()) {
            return redirect()->route('admin.dashboard');
        }
        elseif (Auth::guard('web')->user()) {
            return redirect()->route('dashboard');
        }
        elseif (Auth::guard('affiliates')->user()) {
            return redirect()->route('affiliates.dashboard');
        }
        elseif (Auth::guard('vendors')->user()) {
            return redirect()->route('vendor.dashboard');
        } else {
            return Inertia::render('Business/Auth/Register');
        }
    }

    public function login()
    {   
        if (Auth::guard('administrator')->user()) {
            return redirect()->route('admin.dashboard');
        }
        elseif (Auth::guard('web')->user()) {
            return redirect()->route('dashboard');
        }
        elseif (Auth::guard('affiliates')->user()) {
            return redirect()->route('affiliates.dashboard');
        } else {
            return Inertia::render('Business/Auth/Login');
        }
        
    }

    public function processLogin(Request $request)
    {   
        $credentials = $request->except(['_token']);
        
        if(Helper::isVendorActive($request->email))
        {
            if(auth()->guard('vendors')->attempt($credentials))
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
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if(auth()->guard('vendors')->attempt($credentials))
        {   
            return redirect()->intended(route('vendor.dashboard'))->withSuccess('You are now registered Successfully');
        }
        
    }


    public function logout(Request $request)
    {

        Auth::guard('vendors')->logout();

        $request->session()->flush();

        $request->session()->regenerate();

        return redirect()->guest(route('vendor.dashboard' ));
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
            'orders' => Order::with('customer', 'orderItems')->where('status', OrderStatus::WAITINGQUOTATIONS)->paginate(10)
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
            'commission' => $request->commission,
            'tax' => $request->tax,
            'total_discount' => $request->total_discount,
            'status' => OrderStatus::PENDINGCUSTOMER
        ]);
        $quote = Quotation::create([
            'note' => $request->note,
            'grand_total' => $request->grand_total,
            'sub_total' => $request->sub_total,
            'commission' => $request->commission,
            'total_discount' => $request->total_discount,
            'status' => OrderStatus::PENDINGCUSTOMER,
            'tax' => $request->tax,
            'order_id' => $order->id,
            'book_shop_id' => Auth::guard('vendors')->user()->id
        ]);
        
        //notify Customer about the new quote
        $this->sendSMStoCustomers($order);

       return redirect()->route('orders.index')->with('success', 'Quotation created and sent successfully');
    }

    public function sendSMStoCustomers($payload)
   {
        $getcustomer = Customer::where('id', $payload->customer_id)->select('email', 'phone')->get();
        if ($getcustomer) {
            foreach ($getcustomer as $phone) {
                $SMSpayload = [
                    'message' => 'The best offer for your Order ID '. $payload->invoice_no . ' is ready. Please take a look at your order to accept the offer. Thank you for using '. env('APP_NAME'). ' see ' . route('view.order.status', $payload->id),
                    'recipient' => Helper::formatMobileNumber($phone->phone)
                ];
                $sendsms= SMSHelper::sendSMS($SMSpayload);
                if ($sendsms) {
                    $payload->update(['notify_customer_quote' => true]);
                }
            }
            return;
        }
   }
}
