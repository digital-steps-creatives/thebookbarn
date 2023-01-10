<?php

namespace App\Filament\Widgets;

use Filament\Tables;
use App\Models\Order;
use App\Models\ListOrder;
use App\Enums\OrderStatus;
use Filament\Tables\Table;
use Filament\Tables\Actions\Action;
use Illuminate\Database\Eloquent\Builder;
use Filament\Widgets\TableWidget as BaseWidget;

class OrdersPendingReview extends BaseWidget
{
    protected function getTableQuery(): Builder
    {
        return Order::with('customer', 'orderItems')->latest()->take(3);
    }

    protected function getTableColumns(): array
    {
        return [
            Tables\Columns\TextColumn::make('id'),
            Tables\Columns\TextColumn::make('invoice_no')
                ->label('Order #'),
            Tables\Columns\BadgeColumn::make('status')
                ->colors([
                    'primary',
                    'secondary' => static fn ($state): bool => $state === 'pending review',
                    'warning' => static fn ($state): bool => $state === OrderStatus::WAITINGQUOTATIONS,
                    'success' => static fn ($state): bool => $state === OrderStatus::PAID,
                    'danger' => static fn ($state): bool => $state === OrderStatus::REJECTED,
                ]),
            Tables\Columns\ViewColumn::make('action')->view('filament.tables.columns.convert-order', )
        ];
    }

    

}
