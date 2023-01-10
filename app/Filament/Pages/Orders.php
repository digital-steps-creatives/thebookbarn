<?php

namespace App\Filament\Pages;

use App\Models\Order;
use Filament\Pages\Page;

class Orders extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    protected static string $view = 'filament.pages.orders';
    
    protected function getViewData():array {
        return [
            'orders' => Order::latest()->paginate(2),
        ];
    }

    
}
