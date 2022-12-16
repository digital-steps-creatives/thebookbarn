<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\BookShop;
use App\Dsc\OrderHandler;
use App\Models\Quotation;
use App\Enums\OrderStatus;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use App\Notifications\NotifyVendorOrderAccepted;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;

class FrontController extends Controller
{
    public function home()
    {   
        return Inertia::render('Home', [
            'listavailablebooks' => Book::with('subject', 'classlevel')->where('availability', 1)->where('status', 1)->take(12)->get()
        ]);
    }

    public function searchItems(Request $request)
    {
        $searchresults = (new Search())
        ->registerModel(Book::class, ['name', 'product_type'])
        ->search($request->input('query'));
        return response()->json($searchresults);
    }

    public function cart()
    {
        return Inertia::render('Cart');
    }

    public function Orders()
    {
        return Inertia::render('Orders',[
            'myorders' => Order::with('customer', 'orderItems')->where('customer_id',  auth()->user()->id)->paginate(10)
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
        //notify vendor that their order has been accepted 
        $user = Quotation::where('order_id', $order->id)->first();
        $bookshop = BookShop::find($user->book_shop_id);
        $bookshop->notify(new NotifyVendorOrderAccepted($order));
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

    public function dashboard()
    {   
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query
                        ->orWhere('invoice_no', 'LIKE', "%{$value}%")
                        ->orWhere('status', 'LIKE', "%{$value}%");
                });
            });
        });
        
        $orders = QueryBuilder::for(Order::class)
        ->defaultSort('invoice_no')
        ->allowedSorts(['invoice_no', 'status'])
        ->allowedFilters(['invoice_no', 'status', $globalSearch])
        ->paginate()
        ->withQueryString();
        return Inertia::render('Dashboard', [
            'myorders' => $orders->load('customer', 'orderItems')->where('customer_id',  auth()->user()->id)
        ])->table(function (InertiaTable $table) {
            $table->withGlobalSearch();
            $table->withGlobalSearch('Search through the data...');
            $table->column('invoice_no', 'Order #');
            $table->column('status', 'Status');
        });
    }
    
}
