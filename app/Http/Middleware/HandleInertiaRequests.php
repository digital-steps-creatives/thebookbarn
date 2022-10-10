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
        }else{
            $unreadNotifications =0;
            $notifications = [];
            $userObject = Auth::user();
        }
        
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'unreadNotifications' =>  $unreadNotifications,
            'notifications' =>   $notifications,
            'userObject' => $userObject
        ]);
    }
}
