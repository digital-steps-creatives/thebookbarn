<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;

class AdminController extends Controller
{   

    public function login()
    {
        return Inertia::render('Admin/Auth/Login');
    }

    
    public function processLogin(Request $request)
    {   
        $input = $request->all();
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);
        if ($validator->fails())
        {
            return Redirect::back()->withErrors($validator)->withInput($request->except('password')); // send back the input (not the password) so that we can repopulate the form
        }
        
        if(auth()->guard('administrator')->attempt(array('email' => $input['email'], 'password' => $input['password'])))
        {   
            return redirect()->intended(route('admin.dashboard'));
        }
        return Redirect::back()->with('message','Credentials not matched in our records!');
    }
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'ordersPendingReview' => Order::where('status', 'waiting approval')->latest()->take(10)->get()
        ]);
    }

    public function customers()
    {
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query
                        ->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('email', 'LIKE', "%{$value}%");
                });
            });
        });

        $customers = QueryBuilder::for(Customer::class)
            ->defaultSort('name')
            ->allowedSorts(['name', 'email', 'language_code'])
            ->allowedFilters(['name', 'email', 'language_code', $globalSearch])
            ->paginate()
            ->withQueryString();

        return Inertia::render('Admin/Customers/Index',[
            'customers' => $customers
        ])->table(function (InertiaTable $table) {
            $table->withGlobalSearch();
            $table->withGlobalSearch('Search through the data...');
            $table->column('name', 'Full Name');
            $table->column(
                key: 'email',
                label: 'Email Address',
                canBeHidden: true,
                hidden: false,
                sortable: true,
                searchable: true
            );
            $table->column('status', 'Status');
            $table->column(label: 'Actions');
        });
    }

    public function showCustomer($customer)
    {   
        $findCustomer = Customer::find($customer);
        return Inertia::render('Admin/Customers/Show', [
            'customer' =>  $findCustomer->load('orders')
        ]);
    }
}
