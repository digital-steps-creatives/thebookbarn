<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Customer;
use App\Models\Affiliate;
use Jenssegers\Agent\Agent;
use Illuminate\Http\Request;
use Laravel\Fortify\Features;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
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
    public function Orders($order)
    {   
        $orders = Order::with('orderItems')->get();
        return Inertia::render('Admin/Orders/Index', compact('orders'));
    }

    public function convertImagesOrder($order)
    {   
        $orders = Order::with('orderItems')->find($order);
        return Inertia::render('Admin/Orders/Convert', compact('orders'));
    }

    public function affiliates()
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

        $affiliates = QueryBuilder::for(Affiliate::class)
            ->defaultSort('name')
            ->allowedSorts(['name', 'email', 'language_code'])
            ->allowedFilters(['name', 'email', 'language_code', $globalSearch])
            ->paginate()
            ->withQueryString();

        return Inertia::render('Admin/Affiliates/Index',[
            'affiliates' => $affiliates
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
            $table->column('ref_code', 'Referal Code');
            $table->column(label: 'Actions');
        });
    }
    public function showAffiliate($affiliate)
    {   
        $findAffiliate = Affiliate::find($affiliate);
        return Inertia::render('Admin/Affiliates/Show', [
            'affiliate' =>  $findAffiliate->load('orders')
        ]);
    }

    public function profile(Request $request)
    {
        return Inertia::render('Admin/Profile/Show',  [
            'confirmsTwoFactorAuthentication' => Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm'),
            'sessions' => $this->sessions($request)->all(),
        ]);
    }


    /**
     * Get the current sessions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Support\Collection
     */
    public function sessions(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return collect();
        }

        return collect(
            DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
                    ->where('user_id', $request->user()->getAuthIdentifier())
                    ->orderBy('last_activity', 'desc')
                    ->get()
        )->map(function ($session) use ($request) {
            $agent = $this->createAgent($session);

            return (object) [
                'agent' => [
                    'is_desktop' => $agent->isDesktop(),
                    'platform' => $agent->platform(),
                    'browser' => $agent->browser(),
                ],
                'ip_address' => $session->ip_address,
                'is_current_device' => $session->id === $request->session()->getId(),
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });
    }

    /**
     * Create a new agent instance from the given session.
     *
     * @param  mixed  $session
     * @return \Jenssegers\Agent\Agent
     */
    protected function createAgent($session)
    {
        return tap(new Agent, function ($agent) use ($session) {
            $agent->setUserAgent($session->user_agent);
        });
    }
}
