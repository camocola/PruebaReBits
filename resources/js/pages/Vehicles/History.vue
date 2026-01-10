<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { Link, Head } from '@inertiajs/vue3';

const props = defineProps({
    vehiculo: Object,
    historial: Array
});

const formatDate = (dateString) => {
    if (!dateString) return 'Fecha no disponible';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
</script>

<template>
    <Head title="Historial de Propietarios" />

    <AppLayout title="Historial de Propietarios">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Historial de Propietarios
            </h2>
        </template>

        <div class="py-12 text-left">
            <div class="max-w-5xl mx-auto sm:px-6 lg:px-8">
                
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-6 border-l-4 border-blue-500">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="text-lg font-bold text-gray-700">
                                {{ vehiculo.marca }} {{ vehiculo.modelo }}
                            </h3>
                            <p class="text-sm text-gray-500 font-bold uppercase">Patente: {{ vehiculo.patente }}</p>
                        </div>
                        <Link href="/vehiculos" class="text-blue-600 hover:text-blue-800 font-bold text-sm uppercase">
                            ← Volver al Listado
                        </Link>
                    </div>
                </div>

                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Propietario</th>
                                <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Correo Electrónico</th>
                                <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Fecha de Adquisición</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(owner, index) in historial" :key="owner.id">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="text-sm font-medium text-gray-900">{{ owner.name }}</span>
                                        <span v-if="index === 0" class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800 uppercase">
                                            Actual
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {{ owner.email }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {{ formatDate(owner.pivot?.fecha_adquisicion || vehiculo.created_at) }}
                                </td>
                            </tr>

                            <tr v-if="historial.length === 0 && vehiculo.user">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="text-sm font-medium text-gray-900">{{ vehiculo.user.name }}</span>
                                        <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800 uppercase">
                                            Actual
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {{ vehiculo.user.email }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {{ formatDate(vehiculo.created_at) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </AppLayout>
</template>