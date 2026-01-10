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
        
        try {
            Excel::import(new VehiclesImport, $request->file('file'));
            return redirect()->route('vehiculos.index')->with('message', 'Los vehículos del Excel se han cargado correctamente.');
        } catch (\Exception $e) {
            return redirect()->route('vehiculos.index')->with('message', 'Error al importar el archivo: ');
        } 
    }

    public function store(Request $request)
    {
        // validar datos recibidos
        $data = $request->validate([
            'marca' => 'required|string',
            'modelo' => 'required|string',
            'patente' => 'required|string',
            'anio' => 'required|integer',   
            'precio' => 'required|integer',
            'user_id' => 'nullable|exists:users,id',
        ], [
            'user_id.exists' => 'El dueño seleccionado no es válido.',
        ]);

        if ($request->filled('nuevo_correo')) {
            $user = User::create([
                'name'     => $request->nuevo_nombre . ' ' . $request->nuevo_apellidos,
                'email' => $request->nuevo_correo,
                'password' => bcrypt('password123'), // Contraseña por defecto
            ]);
            $userId = $user->id;
        } else {
            $userId = $request->user_id;

            // Validación manual extra por seguridad si no hay usuario nuevo
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
