<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class VehicleController extends Controller
{
    // Listado de vehículos con su dueño actual
    public function index()
    {
        return Inertia::render('Vehicles/Index', [
            'vehiculos' => Vehicle::with('user')->get() 
        ]);
    }

    // Formulario de creación
    public function create()
    {
        $usuarios = User::select('id', 'name', 'email')->get();
        return Inertia::render('Vehicles/Create', [
            'usuarios' => $usuarios
        ]);
    }

    // Importar vehículos desde Excel
    public function import(Request $request) 
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,xls'
        ], [
            'file.required' => 'Por favor seleccione un archivo.',
            'file.mimes' => 'El archivo debe ser un Excel (.xlsx o .xls)'
        ]);

        $rows = Excel::toArray([], $request->file('file'))[0];
        array_shift($rows); // Quitar encabezados

        foreach ($rows as $row) {
            // 1. Crear o buscar al dueño
            $user = User::firstOrCreate(
                ['email' => $row[2]], 
                [
                    'name' => $row[0] . ' ' . $row[1], 
                    'password' => bcrypt('password123')
                ]
            );

            // 2. Crear o buscar el vehículo por patente
            $vehiculo = Vehicle::firstOrCreate(
                ['patente' => $row[5]], 
                [
                    'marca'   => $row[3],
                    'modelo'  => $row[4],
                    'anio'    => $row[6],
                    'precio'  => $row[7],
                    'user_id' => $user->id,
                ]
            );

            // 3. Registrar siempre en el historial si el vehículo es nuevo
            if ($vehiculo->wasRecentlyCreated) {
                $vehiculo->owners()->attach($user->id, ['fecha_adquisicion' => now()]);
            }
        }

        return redirect('/vehiculos')->with('message', 'Vehículos cargados correctamente.');
    }

    // Guardar vehículo manual
    public function store(Request $request)
    {
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

        $vehicleData = $request->only(['marca', 'modelo', 'patente', 'anio', 'precio']);
        $vehicleData['user_id'] = $userId;

        $vehiculo = Vehicle::create($vehicleData);

        // Registro inicial en historial
        if ($userId) {
            $vehiculo->owners()->attach($userId, ['fecha_adquisicion' => now()]);
        }

        return redirect('/vehiculos')->with('message', 'Vehículo registrado con éxito.');
    }

    // Formulario de edición
    public function edit($id)
    {
        $vehiculo = Vehicle::findOrFail($id);
        $usuarios = User::all();

        return Inertia::render('Vehicles/Edit', [
            'vehiculo' => $vehiculo,
            'usuarios' => $usuarios
        ]);
    }

    // Actualizar vehículo y registrar cambio de dueño si aplica
    public function update(Request $request, $id)
    {
        $vehiculo = Vehicle::findOrFail($id);

        $data = $request->validate([
            'marca' => 'required',
            'modelo' => 'required',
            'patente' => 'required|unique:vehicles,patente,' . $id,
            'anio' => 'required|integer',
            'precio' => 'required|integer',
            'user_id' => 'required|exists:users,id',
        ]);

        $duenoAnterior = $vehiculo->user_id;
        $vehiculo->update($data);

        // Registrar cambio de dueño en el historial si el ID cambió
        if ($duenoAnterior != $request->user_id) {
            $vehiculo->owners()->attach($request->user_id, [
                'fecha_adquisicion' => now()
            ]);
        }

        return redirect('/vehiculos')->with('message', 'Vehículo actualizado correctamente.');
    }

    // Ver historial ordenado: Actual primero
    public function historial($id)
    {
        $vehiculo = Vehicle::with(['user', 'owners' => function($query) {
            $query->orderBy('fecha_adquisicion', 'desc');
        }])->findOrFail($id);

        return Inertia::render('Vehicles/History', [
            'vehiculo' => $vehiculo,
            'historial' => $vehiculo->owners 
        ]);
    }

    public function destroy(Vehicle $vehicle)
    {
        $vehicle->delete();
        return redirect('/vehiculos')->with('message', 'Vehículo eliminado.');
    }
}