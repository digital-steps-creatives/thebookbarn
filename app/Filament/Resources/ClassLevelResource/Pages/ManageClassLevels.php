<?php

namespace App\Filament\Resources\ClassLevelResource\Pages;

use App\Filament\Resources\ClassLevelResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageClassLevels extends ManageRecords
{
    protected static string $resource = ClassLevelResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
