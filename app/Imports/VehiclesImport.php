<?php

namespace App\Imports;

use Illuminate\Support\Str; //para el str:random
use App\Models\Vehicle;
use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow; //títulos de columna

class VehiclesImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        //buscamos el usuario por correo electrónico y si no se encuentra se crea uno nuevo
        $user = User::firstOrCreate(
            ['email' => $row['Correo']],
            [
                'nombre' => $row['Nombre'],
                'apellidos' => $row['Apellidos'],
                'password' => bcrypt(Str::random(10)), // Contraseña temporal
            ]
        );
        
        // crear vehículo asociado al usuario
        return new Vehicle([
            'marca'   => $row['Marca'],
            'modelo'  => $row['Modelo'],
            'patente' => $row['Patente'],
            'anio'    => $row['Año'],
            'precio'  => $row['Precio'],
            'user_id' => $user->id, // ID encontrado en la bd
        ]);

        //registro en la tabla histórica de propietarios
        $vehicle->owners()->attach($user->id, [
            'fecha_adquisicion' => now()
        ]);

        //ya realizada la inserción, retorna null
        return null;
    }
}
