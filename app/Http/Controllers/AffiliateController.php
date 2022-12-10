<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Affiliate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class AffiliateController extends Controller
{
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
        
        if(auth()->guard('affiliates')->attempt(array('email' => $input['email'], 'password' => $input['password'])))
        {   
            return redirect()->intended(route('affiliates.dashboard'));
        }
        return Redirect::back()->with('message','Credentials not matched in our records!');
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
         
        return redirect()->intended(route('affiliates.dashboard'))->withSuccess('You have signed-in');

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
}
