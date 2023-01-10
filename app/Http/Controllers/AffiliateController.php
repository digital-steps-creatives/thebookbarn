<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\RefCode;
use App\Models\Affiliate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\StatefulGuard;
use Laravel\Fortify\Http\Requests\LoginRequest;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;

class AffiliateController extends Controller
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

    public function landing()
    {
        return Inertia::render('Affiliates/Login');
    }

    public function signup()
    {
        return Inertia::render('Affiliates/Register');
    }
    
    /**
     * processLogin
     *
     * @param  mixed $request
     * @return void
     */
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
        
        if(auth()->guard('affiliates')->attempt(array('email' => $input['email'], 'password' => $input['password'])))
        {   
            return redirect()->intended(route('affiliates.dashboard'));
        }
        return Redirect::back()->with('message','Credentials not matched in our records!');
    }


    public function processRegister(Request $request)
    {
        $request->validate([
            
        ]);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:affiliates',
            'password' => 'required|min:6',
        ]);
        if ($validator->fails()) {
            return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
        }

        $data = $request->all();
        $check = $this->create($data);
        $this->createRef($check);
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if(auth()->guard('affiliates')->attempt($credentials))
        {   
            return redirect()->intended(route('affiliates.dashboard'))->withSuccess('You are now registered Successfully');
        }

    }

    public function create(array $data)
    {
      return Affiliate::create([
        'name' => $data['name'],
        'password' => Hash::make($data['password']),
        'role' => $data['role'],
        'email' => $data['email'],
        'status' => 'active',
      ]);
    }

    /**
     * Dashboard
     */
    public function dashboard()
    {   
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query
                        ->orWhere('ref_code', 'LIKE', "%{$value}%")
                        ->orWhere('status', 'LIKE', "%{$value}%");
                });
            });
        });
        
        $refcodes = QueryBuilder::for(RefCode::class)
        ->defaultSort('ref_code')
        ->allowedSorts(['ref_code', 'status'])
        ->allowedFilters(['ref_code', 'status', $globalSearch])
        ->paginate()
        ->withQueryString();

        return Inertia::render('Affiliates/Dashboard', [
            'refcodes' => $refcodes,
            'greetings' => $this->greetings()
        ])->table(function (InertiaTable $table) {
            $table->withGlobalSearch();
            $table->withGlobalSearch('Search through the data...');
            $table->column('ref_code', 'Referral Code');
            $table->column('status', 'Status');
        });
    }

    public function createRef($affiliate = null)
    {   
        if ($affiliate) {
            $affiliateId = $affiliate->id;
        } else {
            $affiliateId = auth()->guard('affiliates')->user()->id;
        }
        
        $refcode = Str::random(5);
        if ($refcode && RefCode::where('ref_code', $refcode)->doesntExist()) {
           
                return RefCode::create([
                    'affiliate_id' => $affiliateId,
                    'ref_code' => $refcode,
                    'status' => 'not used'
                ]);
        }

    }

    public function greetings()
    {
        $hour = Carbon::now()->format('H');
        if ($hour < 12) {
            return 'Good morning';
        }
        if ($hour < 17) {
            return 'Good afternoon';
        }
        return 'Good evening';
    }
}
