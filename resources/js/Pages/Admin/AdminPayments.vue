<template>
    <AppLayout title="Payments">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Payments
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="row">
                    <div class="col-12">
                        <div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg">
                            <div class="toolbar px-4 justify-end flex">
                                <button class="mb-2 btn btn-primary text-white" @click="registerURL">Register Mpesa URLs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import axios from 'axios';
export default {
    data() {
        return {
            loader:false,
        }
    },
    components:{
        AppLayout, Link
    },
    methods: {
        registerURL()
        {
            this.loader = true;
            axios.post(route('register.mpesa.urls'))
                .then((response) => {
                    if (response.data.status ===200) {
                        Swal.fire({
                            title: response.data.message,
                            icon: 'success',
                            timer: 2000,
                            timerProgressBar: true,
                            showConfirmButton: false
                        })
                    }
                });
            this.loader = false;
        }
    },
}
</script>