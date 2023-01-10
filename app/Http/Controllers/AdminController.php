<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Customer;
use App\Models\Affiliate;
use App\Models\BookShop;
use Jenssegers\Agent\Agent;
use Illuminate\Http\Request;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\LoginViewResponse;
use Laravel\Fortify\Contracts\LogoutResponse;
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\StatefulGuard;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;

class AdminController extends Controller
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


    public function login()
    {
        if (Auth::guard('administrator')->user()) {
            return redirect()->route('admin.dashboard');
        } else {
            return Inertia::render('Admin/Auth/Login');
        }
        
    }

    
    public function processLogin(LoginRequest $request)
    {   
        $input = $request->all();
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
        }
        
        if(auth()->guard('administrator')->attempt(array('email' => $input['email'], 'password' => $input['password'])))
        {   
            return redirect()->intended(route('admin.dashboard'));
        }
        return Redirect::back()->with('message','Credentials not matched in our records!');
    }


     /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Laravel\Fortify\Contracts\LogoutResponse
     */
    public function destroy(Request $request): LogoutResponse {
        $this->guard->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return app(LogoutResponse::class);
    }


    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'ordersPendingReview' => Order::where('status', 'waiting approval')->latest()->take(10)->get(),
            'newvendors' => BookShop::where('created_at', '>=', date('Y-m-d H:i:s',strtotime('-7 days')))->count(),
            'newcustomers' => Customer::where('created_at', '>=', date('Y-m-d H:i:s', strtotime('-7 days')))->count()
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
            'affiliates' => $affiliates->load('referrals')
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
            $table->column(label: 'Code');
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

    public function getPayments()
    {
        return Inertia::render('Admin/AdminPayments');
    }
}
