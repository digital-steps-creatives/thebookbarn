<?php

namespace App\Http\Livewire;

use App\Models\Order;
use Livewire\Component;
use Illuminate\Support\Str;
use Mediconesystems\LivewireDatatables\Column;
use Mediconesystems\LivewireDatatables\DateColumn;
use Mediconesystems\LivewireDatatables\NumberColumn;
use Mediconesystems\LivewireDatatables\Http\Livewire\LivewireDatatable;

class ShowOrders extends LivewireDatatable
{   
    public $exportable = true;

    public function builder()
    {
        return Order::query()->leftJoin('users', 'users.id', 'orders.customer_id');
    }

    public function columns()
    {
        return [
   
            Column::name('invoice_no')
                ->label('Invoice #'),
            Column::name('users.name')
                ->label('Customer'),
            Column::name('status'),
   
            DateColumn::name('created_at')
                ->label('Creation Date')
        ];
    }
    // public function render()
    // {
    //     return view('livewire.show-orders');
    // }
}
