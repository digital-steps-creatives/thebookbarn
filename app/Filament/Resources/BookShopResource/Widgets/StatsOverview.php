<?php

namespace App\Filament\Resources\BookShopResource\Widgets;

use App\Models\BookShop;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Card;

class StatsOverview extends BaseWidget
{
    protected function getCards(): array
    {
        return [
            Card::make('New Vendors', BookShop::count())->descriptionIcon('heroicon-s-trending-up')->color('success'),
            Card::make('Orders', 350)->descriptionIcon('heroicon-s-trending-up')->color('primary'),
            Card::make('Paid Invoice', '192.1k')
            ->description('32k increase')
            ->descriptionIcon('heroicon-s-trending-up')
            ->chart([7, 2, 10, 3, 15, 4, 17])
            ->color('success'),
            Card::make('New Customers', '11,500')
            ->description('32k increase')
            ->descriptionIcon('heroicon-s-trending-up')
            ->chart([700, 233, 1000, 300, 157, 4000, 464])
            ->color('primary'),
        ];
    }
}
