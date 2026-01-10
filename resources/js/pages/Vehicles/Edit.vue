<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import Input from '@/components/ui/input/Input.vue';

const props = defineProps({
    vehiculo: Object,
    usuarios: Array
});

const form = useForm({
    marca: props.vehiculo.marca,
    modelo: props.vehiculo.modelo,
    patente: props.vehiculo.patente,
    anio: props.vehiculo.anio,
    precio: props.vehiculo.precio,
    user_id: props.vehiculo.user_id,
});

const submit = () => {
    // Usamos put para actualizar el registro
    form.put(`/vehiculos/${props.vehiculo.id}`, {
        onSuccess: () => alert('Vehículo actualizado con éxito.'),
        onError: () => alert('Error al actualizar: Revisa los datos.')
    });
};
</script>

<template>
    <AppLayout title="Editar Vehículo">
        <div class="p-8 bg-white rounded-lg shadow-xl max-w-2xl mx-auto mt-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Editar Vehículo</h2>
            
            <form @submit.prevent="submit" class="space-y-6 text-left">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Marca</label>
                        <Input v-model="form.marca" required />
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Modelo</label>
                        <Input v-model="form.modelo" required />
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Patente</label>
                        <Input v-model="form.patente" class="uppercase" required />
                        <div v-if="form.errors.patente" class="text-red-500 text-xs mt-1">{{ form.errors.patente }}</div>
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Año</label>
                        <Input v-model="form.anio" required />
                    </div>
                </div>

                <div>
                    <label class="text-xs font-bold uppercase text-gray-500">Propietario</label>
                    <select v-model="form.user_id" class="w-full border-gray-300 rounded-md p-2.5 text-gray-900" required>
                        <option v-for="user in usuarios" :key="user.id" :value="user.id">
                            {{ user.name }} ({{ user.email }})
                        </option>
                    </select>
                </div>

                <div class="flex items-center justify-end mt-8 gap-4 border-t pt-6">
                    <Link href="/vehiculos" class="text-gray-400 font-bold uppercase text-xs hover:text-red-500">Cancelar</Link>
                    <button type="submit" :disabled="form.processing" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg">
                        {{ form.processing ? 'Guardando...' : 'Guardar Cambios' }}
                    </button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>