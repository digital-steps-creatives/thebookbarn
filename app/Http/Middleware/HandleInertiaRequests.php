<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        if (Auth::guard('vendors')->check()){
            $unreadNotifications = Auth::guard('vendors')->user()->unreadNotifications()->count();
            $notifications = Auth::guard('vendors')->user()->notifications()->get();
            $userObject = Auth::guard('vendors')->user();
            $user = Auth::guard('vendors')->user();
        }elseif(auth()->guard('administrator')->check()){
            $user = auth()->guard('administrator')->user();
            $unreadNotifications = auth()->guard('administrator')->user()->unreadNotifications()->count();
            $notifications = auth()->guard('administrator')->user()->notifications()->get();
            $userObject = auth()->guard('administrator')->user();
        }elseif(auth()->guard('web')->check()){
            $user = auth()->guard('web')->user();
            $unreadNotifications = auth()->guard('web')->user()->unreadNotifications()->count();
            $notifications = auth()->guard('web')->user()->notifications()->get();
            $userObject = auth()->guard('web')->user();
        }elseif(auth()->guard('affiliates')->check()){
            $user = auth()->guard('affiliates')->user();
            $unreadNotifications = auth()->guard('affiliates')->user()->unreadNotifications()->count();
            $notifications = auth()->guard('affiliates')->user()->notifications()->get();
            $userObject = auth()->guard('affiliates')->user();
        }else{
            $unreadNotifications =0;
            $notifications = [];
            $userObject = Auth::user();
            $user =  null;
        }
        
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'user' => $user,
            'unreadNotifications' =>  $unreadNotifications,
            'notifications' =>   $notifications,
            'userObject' => $userObject,
            'flash' => [
                'error' => fn () => $request->session()->get('error'),
                'success' => fn () => $request->session()->get('success')
            ],
        ]);
    }
}
