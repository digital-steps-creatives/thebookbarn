<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AffiliateController extends Controller
{
    public function landing()
    {
        return Inertia::render('Affiliates/Login');
    }
}
