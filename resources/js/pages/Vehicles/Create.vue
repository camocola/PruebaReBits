<script setup>
import { ref } from 'vue';
import { useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import Input from '@/components/ui/input/Input.vue';
import Button from '@/components/ui/button/Button.vue';

const props = defineProps({
    usuarios: { type: Array, default: () => [] }
});

const crearNuevo = ref(false);

const form = useForm({
    marca: '', 
    modelo: '', 
    patente: '', 
    anio: '', 
    precio: '',
    user_id: '',
    nuevo_nombre: '', 
    nuevo_apellidos: '', 
    nuevo_correo: ''
});

const submit = () => {
    form.post('/vehiculos', {
        onSuccess: () => {
            alert('Vehículo y dueño registrados correctamente.');
            form.reset();
        },
        onError: (errors) => {
            if (!errors.patente) {
                alert('Error: Revisa que falten datos obligatorios.');
            }
            console.error(errors);
        }
    });
};
</script>

<template>
    <AppLayout title="Nuevo Vehículo">
        <div class="p-8 bg-white rounded-lg shadow-xl max-w-2xl mx-auto text-left mt-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Registrar Vehículo</h2>
            
            <form @submit.prevent="submit" class="space-y-6">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Marca</label>
                        <Input v-model="form.marca" placeholder="Ej: Toyota" required />
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Modelo</label>
                        <Input v-model="form.modelo" placeholder="Ej: Yaris" required />
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Patente</label>
                        <Input v-model="form.patente" placeholder="Ej: AB1234" class="uppercase" required />
                        <div v-if="form.errors.patente" class="text-red-600 text-xs mt-1 font-bold animate-pulse">
                            {{ form.errors.patente }}
                        </div>
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Año</label>
                        <Input v-model="form.anio" placeholder="Ej: 2024" required />
                    </div>
                    <div>
                        <label class="text-xs font-bold uppercase text-gray-500">Precio</label>
                        <Input v-model="form.precio" placeholder="Ej: 5900000" required />
                    </div>
                </div>

                <div class="bg-gray-50 p-5 rounded-xl border-2 border-dashed border-gray-200">
                    <div class="flex justify-between items-center mb-4">
                        <label class="font-bold text-gray-700">¿Quién es el dueño?</label>
                        <button type="button" @click="crearNuevo = !crearNuevo" class="text-blue-600 text-xs font-bold underline uppercase">
                            {{ crearNuevo ? 'Seleccionar existente' : '+ Crear nuevo dueño' }}
                        </button>
                    </div>

                    <div v-if="!crearNuevo" class="flex flex-col gap-1">
                        <label for="user_id" class="text-sm font-bold text-gray-700 uppercase tracking-wide">
                            Propietario
                        </label>
                        <select 
                            id="user_id" 
                            v-model="form.user_id" 
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-white text-gray-900 font-medium appearance-none"
                            :required="!crearNuevo"
                        >
                            <option value="" disabled selected class="text-gray-400">
                                -- Seleccione el dueño del auto --
                            </option>
                            <option 
                                v-for="user in usuarios" 
                                :key="user.id" 
                                :value="user.id" 
                                class="text-gray-900 bg-white"
                            >
                                {{ user.name }} ({{ user.email }})
                            </option>
                        </select>
                    </div>

                    <div v-else class="grid grid-cols-1 gap-3">
                        <Input v-model="form.nuevo_nombre" placeholder="Nombre completo" :required="crearNuevo" />
                        <Input v-model="form.nuevo_apellidos" placeholder="Apellidos" :required="crearNuevo" />
                        <Input v-model="form.nuevo_correo" type="email" placeholder="Correo electrónico" :required="crearNuevo" />
                    </div>
                </div>

                <div class="flex items-center justify-end mt-8 gap-4 border-t pt-6">
                    <Link href="/vehiculos" class="text-gray-400 font-bold uppercase text-xs hover:text-red-500">
                        Cancelar
                    </Link>
                    <button 
                        type="submit" 
                        :disabled="form.processing" 
                        class="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg disabled:opacity-50"
                    >
                        {{ form.processing ? 'Guardando...' : 'Finalizar Registro' }}
                    </button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>