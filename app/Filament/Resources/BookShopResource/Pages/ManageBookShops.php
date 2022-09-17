<?php

namespace App\Filament\Resources\BookShopResource\Pages;

use App\Filament\Resources\BookShopResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageBookShops extends ManageRecords
{
    protected static string $resource = BookShopResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
