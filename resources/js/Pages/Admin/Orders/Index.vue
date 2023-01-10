<script>
import AppLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
export default {
    props:{
        orders:Object
    },
    components:{
        AppLayout, Link
    }
}
</script>

<template>
    <AppLayout title="Manage Orders">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage Orders
            </h2>
        </template>
    </AppLayout>
</template>