<?php

namespace App\Filament\Resources\BookResource\Pages;

use App\Filament\Resources\BookResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageBooks extends ManageRecords
{
    protected static string $resource = BookResource::class;
    protected static ?string $title = 'Products';
    
    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
