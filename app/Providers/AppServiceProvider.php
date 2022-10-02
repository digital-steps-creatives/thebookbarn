<?php

namespace App\Providers;

use Filament\Facades\Filament;
use Illuminate\Foundation\Vite;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {   
        URL::forceScheme('https');
        $this->app['request']->server->set('HTTPS','on');
        Filament::serving(function () {
            Filament::registerTheme(
                app(Vite::class)('resources/css/bookbarn.css'),
            );
        });
    }
}
