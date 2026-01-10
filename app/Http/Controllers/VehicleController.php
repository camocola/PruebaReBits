<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use App\Models\User;

//carga de excel
use App\Imports\VehiclesImport;
use Maatwebsite\Excel\Facades\Excel;
use Inertia\Inertia;

class VehicleController extends Controller
{
    //listado vehiculos
    public function index()
    {
        return Inertia::render('Vehicles/Index', [
            'vehiculos' => Vehicle::with('user')->get() 
        ]);
    }

    public function create()
    {
        //obtener lista usuarios para asignar propietario vehículo
        $usuarios = User::select('id', 'name', 'email')->get();

        return Inertia::render('Vehicles/Create', [
            'usuarios' => $usuarios
        ]);
    }

    //importar excel
    public function import(Request $request) 
    {
        //validar archivo
        $request->validate([
        'file' => 'required|mimes:xlsx,xls'
        ], [
            'file.required' => 'Por favor seleccione un archivo.',
            'file.mimes' => 'El archivo debe ser un Excel (.xlsx o.xls)'
        ]);

        //excel a array
        $rows = Excel::toArray([], $request->file('file'))[0];
        //quitar encabezados
        array_shift($rows);

        //columnas según el orden
        foreach ($rows as $row) {
            $user = User::firstOrCreate(
                ['email' => $row[2]], 
                [
                    'name' => $row[0] . ' ' . $row[1], 
                    'password' => bcrypt('password123')
                ]
            );

            // crea el vehículo vinculado al usuario importado
            $vehiculo = Vehicle::firstOrCreate(
                ['patente' => $row[5]], // Busca si la patente ya existe
                [
                    'marca'   => $row[3],
                    'modelo'  => $row[4],
                    'anio'    => $row[6],
                    'precio'  => $row[7],
                    'user_id' => $user->id,
                ]
            );
        }
        
        //tabla histórica
        if ($vehiculo->wasRecentlyCreated) {
            $vehiculo->owners()->attach($user->id, ['fecha_adquisicion' => now()]);
        }

        return redirect('/vehiculos')->with('message', 'Vehículos cargados correctamente.');
    }

    public function store(Request $request)
    {
        // validar datos recibidos
        $data = $request->validate([
            'marca' => 'required|string',
            'modelo' => 'required|string',
            'patente' => 'required|string|unique:vehicles,patente',
            'anio' => 'required|integer',   
            'precio' => 'required|integer',
            'user_id' => 'nullable|exists:users,id',
        ], [
            'user_id.exists' => 'El dueño seleccionado no es válido.',
            'patente.unique' => 'Esa patente ya está registrada en el sistema.',
        ]);

        if ($request->filled('nuevo_correo')) {
            $user = User::firstOrCreate(
                ['email' => $request->nuevo_correo],
                [
                    'name'     => $request->nuevo_nombre . ' ' . $request->nuevo_apellidos,
                    'password' => bcrypt('password123'),
                ]
            );
            $userId = $user->id;
        } else {
            $userId = $request->user_id;

            if (!$userId) {
                return back()->withErrors(['user_id' => 'Debes seleccionar un dueño o crear uno nuevo.']);
            }
        }

        //datos básicos del formulario
        $vehicleData = $request->only(['marca', 'modelo', 'patente', 'anio', 'precio']);

        // añadir user_id si existe
        $vehicleData['user_id'] = $userId;

        // crear vehículo
        $vehiculo = Vehicle::create($vehicleData);

        // tabla historial propietarios
        if ($userId) {
            $vehiculo->owners()->attach($userId, ['fecha_adquisicion' => now()]);
        }

        //vehiculo añadido correctamente
        return redirect('/vehiculos')->with('message', 'Vehículo registrado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicle $vehicle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
