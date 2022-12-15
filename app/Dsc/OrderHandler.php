<?php

namespace App\Dsc;

use App\Traits\CreateCustomer;
use App\Traits\InteractsWithOrder;

class OrderHandler
{
    use CreateCustomer, InteractsWithOrder;
}
