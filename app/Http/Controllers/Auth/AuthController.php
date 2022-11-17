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
        $input = $request->all();
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);
        if ($validator->fails())
        {
            return Redirect::to('login')->withErrors($validator)->withInput($request->except('password')); // send back the input (not the password) so that we can repopulate the form
        }
        $user = Customer::where('email', $request->email)->first();
        if ($user && Helper::isCustomerActive($request->email)) {
            if(auth()->guard('web')->attempt(array('email' => $input['email'], 'password' => $input['password'])))
                {   
                    return redirect()->intended(route('dashboard'));
                }
            return redirect()->route('login')->withError('Credentials not matched in our records!');
           
        }
        else
        {
            return redirect()->route('login')->with('error','You are not an active customer!');
        }
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
