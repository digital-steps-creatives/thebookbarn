<?php

namespace App\Http\Controllers\Auth;

use App\Dsc\Helper;
use Inertia\Inertia;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;

class AuthController extends Controller
{
    public function passwordReset()
    {
        return view('passwords.email');
    }

    public function processLogin(Request $request)
    {   
        $credentials = $request->except(['_token']);
        
        if(Helper::isCustomerActive($request->email))
        {
            if(Auth::guard('web')->attempt($credentials))
            {   
                return redirect(RouteServiceProvider::HOME);
            }
            return redirect()->route('login')->with('message','Credentials not matched in our records!');
        }
        return redirect()->route('login')->with('message','You are not an active customer!');
    }

    public function processRegister(Request $request)
    {   
        
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $data = $request->all();
        $check = $this->create($data);
         
        return redirect(RouteServiceProvider::HOME)->withSuccess('You have signed-in');
    }

    public function create(array $data)
    {
      return Customer::create([
        'name' => $data['name'],
        'password' => Hash::make($data['password']),
        'role' => 'prospect',
        'email' => $data['email'],
        'status' => 'active',
      ]);
    }    
}
