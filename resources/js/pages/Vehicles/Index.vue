<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';

const props = defineProps({
    vehiculos: {
        type: Array,
        default: () => []
    }
});

// excel
const formImport = useForm({
    file: null,
});

const submitImport = () => {
    formImport.post('/vehiculos/importar', {
        forceFormData: true,
        onSuccess: () => {
            formImport.reset();
            // Refresca los datos de la tabla sin recargar toda la página
            router.reload({ only: ['vehiculos'] }); 
            alert('Importación completada.');
        },
        onError: (errors) => {
            console.error(errors);
            alert('Error al importar: Revisa el formato del archivo.');
        }
    });
};

const formatPrice = (value) => {
    return new Number(value).toLocaleString('es-CL');
};
</script>

<template>
    <AppLayout title="Gestión de Vehículos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Mantención de Vehículos
            </h2>
        </template>

        <div class="py-12 text-left">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                
                <div v-if="$page.props.flash?.message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {{ $page.props.flash.message }}
                </div>

                <div class="flex justify-end mb-4">
                    <Link href="/vehiculos/create" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">
                        + Nuevo Vehículo
                    </Link>
                </div>

                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-6 border-l-4 border-green-500">
                    <h3 class="text-lg font-bold text-gray-700 mb-4">Importación de datos desde archivo.</h3>
                    <form @submit.prevent="submitImport" class="flex flex-col md:flex-row items-center gap-4">
                        <input 
                            type="file" 
                            @input="formImport.file = $event.target.files[0]" 
                            accept=".xlsx, .xls"
                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 cursor-pointer"
                            required
                        />
                        <button type="submit" :disabled="formImport.processing" class="bg-green-600 text-white py-2 px-6 rounded font-bold disabled:opacity-50">
                            {{ formImport.processing ? 'Procesando...' : 'Cargar Excel' }}
                        </button>
                    </form>
                </div>

                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Marca</th>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Modelo</th>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Patente</th>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Año</th>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Dueño</th>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Precio</th>
                                <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
                                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ vehiculo.marca }}</td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ vehiculo.modelo }}</td>
                                <td class="px-6 py-4 text-sm font-bold text-blue-600 uppercase">{{ vehiculo.patente }}</td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ vehiculo.anio }}</td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-900">
                                    {{ vehiculo.user ? vehiculo.user.name : 'Sin Dueño' }}
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-900">${{ formatPrice(vehiculo.precio) }}</td>
                                <Link 
                                    :href="'/vehiculos/' + vehiculo.id + '/historial'" 
                                    class="text-green-600 hover:text-green-900 font-bold bg-green-50 px-3 py-1 rounded-md"
                                >
                                    Historial
                                </Link>
                                
                                <Link 
                                    :href="'/vehiculos/' + vehiculo.id + '/edit'" 
                                    class="text-indigo-600 hover:text-indigo-900 font-bold bg-indigo-50 px-3 py-1 rounded-md"
                                >
                                    Editar
                                </Link>
                            </tr>
                            <tr v-if="vehiculos.length === 0">
                                <td colspan="7" class="px-6 py-4 text-center text-gray-500 italic">No hay vehículos registrados.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>