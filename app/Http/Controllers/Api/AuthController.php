<?php

namespace App\Http\Controllers\Api;

use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Notifications\CustomerWelcomeNotification;
use Illuminate\Auth\Events\Registered;

class AuthController extends BaseController
{
    public bool $isResetting = false;
    public bool $hasBeenSent = false;

    public function signin(Request $request)
    {
        //Log::info($request->all());
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $authUser = Auth::user();
            $success['token'] =  $authUser->createToken('Mybookbarn')->plainTextToken;
            $success['name'] =  $authUser->name;

            return $this->sendResponse($success, 'User signed in');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',

        ]);

        if($validator->fails()){
            return $this->sendError('Error validation', $validator->errors());
        }

        $input = $request->all();
        $input['role'] = 'customer';
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        event( new Registered($user));
        $success['token'] =  $user->createToken('Mybookbarn')->plainTextToken;
        $success['name'] =  $user->name;

        return $this->sendResponse($success, 'User created successfully.');
    }

    public function logout(Request $request)
    {
        Auth::user()->tokens()->where('id', $request->user_id)->delete();
        $success['status'] = 200;
        return $this->sendResponse($success, 'User logged out successfully.');
    }

    public function resetpassword()
    {   
        $hasBeenSent = false;
        return view('vendor.filament-breezy.reset-password', compact('hasBeenSent'));
    }
}
