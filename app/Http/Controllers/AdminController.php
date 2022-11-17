<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{   

    public function login()
    {
        return Inertia::render('Admin/Auth/Login');
    }

    public function index()
    {
        return Inertia::render('Admin/Dashboard');
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
}
