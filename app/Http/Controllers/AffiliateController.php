<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Affiliate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\StatefulGuard;
use Laravel\Fortify\Http\Requests\LoginRequest;

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
        return Inertia::render('Affiliates/Dashboard');
    }

    public function createRef()
    {

    }
}
