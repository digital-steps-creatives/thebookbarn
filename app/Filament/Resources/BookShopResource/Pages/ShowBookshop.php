<?php

namespace App\Filament\Resources\BookShopResource\Pages;

use App\Filament\Resources\BookShopResource;
use Filament\Resources\Pages\Page;

class ShowBookshop extends Page
{
    protected static string $resource = BookShopResource::class;

    protected static string $view = 'filament.resources.book-shop-resource.pages.show-bookshop';
}
