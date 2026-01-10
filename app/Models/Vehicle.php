<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vehicle extends Model
{
    use HasFactory;
    
    //mayor control sobre los campos asignables en masa
    protected $fillable = [
        'marca', 
        'modelo', 
        'patente', 
        'anio', //año
        'precio', 
        'user_id'
    ];

    //relación historial de propietarios del vehículo
    public function owners()
    {
        return $this->belongsToMany(User::class, 'vehicle_histories')
                    ->withPivot('fecha_adquisicion')
                    ->withTimestamps();
    }

    //relación usuario propetario del vehículo
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
