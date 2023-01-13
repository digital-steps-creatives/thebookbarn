<?php

namespace App\Filament\Resources\BookShopResource\Widgets;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Order;
use App\Models\BookShop;
use App\Models\Customer;
use App\Enums\OrderStatus;
use Filament\Widgets\StatsOverviewWidget\Card;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatsOverview extends BaseWidget
{
    protected function getCards(): array
    {
        $newcustomers = Customer::where('role', 'customer')->get()->groupBy(function($user) {
            return Carbon::parse($user->created_at)->format('m');
        });
        return [
            Card::make('New Vendors', BookShop::count())->descriptionIcon('heroicon-s-trending-up')->color('success'),
            Card::make('Orders Pending', Order::where('status', OrderStatus::WAITINGQUOTATIONS)->count())->descriptionIcon('heroicon-s-trending-up')->color('primary'),
            Card::make('Paid Invoice', '192.1k')
            ->description('32k increase')
            ->descriptionIcon('heroicon-s-trending-up')
            ->chart([7, 2, 10, 3, 15, 4, 17])
            ->color('success'),
            Card::make('New Customers', Customer::where('role', 'customer')->count())
            ->description('32k increase')
            ->descriptionIcon('heroicon-s-trending-up')
            ->chart([$newcustomers])
            ->color('info'),
        ];
    }
}
