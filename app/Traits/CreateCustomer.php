<?php

namespace App\Traits;

use App\Models\User;

trait CreateCustomer
{
    /**
     * Create a new customer for the order
     *
     * @param \App\Http\Requests\OrderRequest $request
     * @return \App\Models\Customer
     */
    public function createCustomer($request)
    {
        $customer = User::create(array_merge(
            $request->only('name', 'role', 'email', 'phone'),
            ['password' => bcrypt($request->password)]
        ));

        return $customer->id;
    }
}
