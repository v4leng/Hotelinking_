<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL; // Importante agregar esta línea

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        // Fuerza el esquema HTTPS en producción para que las cookies 
        // se emitan con el flag 'Secure' correctamente.
        if (app()->environment('production')) {
            URL::forceScheme('https');
            $this->app->make('cookie')->setDefaultPathAndDomain(
            '/', 
            null, 
            true,
            'None' 
        );
        }

        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url')."/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
        });
    }
}