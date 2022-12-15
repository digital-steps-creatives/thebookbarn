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
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;

class AuthController extends Controller
{
    

    public function passwordReset()
    {
        return view('passwords.email');
    }

    public function processLogin(Request $request)
    {   
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);
        if (Auth::guard('web')->attempt([
            'email' => $request->email,
            'password' => $request->password
        ], $request->get('remember'))) {
            return redirect()->intended(route('dashboard'));
        }
        return back()->withInput($request->only('email', 'remember'));
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
         
        return redirect()->intended(route('dashboard'))->withSuccess('You have signed-in');
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
