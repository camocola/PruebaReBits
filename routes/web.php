<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\VehicleController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';

// solo usuarios autenticados pueden gestionar vehículos
Route::middleware(['auth', 'verified'])->group(function () {
    //listado principal
    Route::resource('vehiculos', VehicleController::class); 

    //para importar vehículos desde excel
    Route::post('vehiculos/importar', [VehicleController::class, 'import'])->name('vehiculos.import');

    //para ver el historial de un vehículo
    Route::get('vehiculos/{id}/historial', [VehicleController::class, 'historial'])->name('vehiculos.historial');

});