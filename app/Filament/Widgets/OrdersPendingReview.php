<?php

namespace App\Filament\Widgets;

use App\Enums\OrderStatus;
use App\Models\ListOrder;
use Filament\Tables;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class OrdersPendingReview extends BaseWidget
{
    protected function getTableQuery(): Builder
    {
        return ListOrder::query()->latest();
    }

    protected function getTableColumns(): array
    {
        return [
            Tables\Columns\TextColumn::make('id'),
            Tables\Columns\TextColumn::make('book')
                ->label('Book Name'),
            Tables\Columns\TextColumn::make('class'),
            Tables\Columns\TextColumn::make('level'),
            Tables\Columns\TextColumn::make('quantity'),
            Tables\Columns\BadgeColumn::make('status')
                ->colors([
                    'primary',
                    'secondary' => static fn ($state): bool => $state === 'pending review',
                    'warning' => static fn ($state): bool => $state === OrderStatus::WAITINGQUOTATIONS,
                    'success' => static fn ($state): bool => $state === OrderStatus::PAID,
                    'danger' => static fn ($state): bool => $state === OrderStatus::REJECTED,
                ])
        ];
    }
}
