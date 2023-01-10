<script setup>
import AppLayout from '@/Layouts/AdminLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
defineProps({
    customers:Object
})
</script>

<template>
    <AppLayout title="Customers">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Customers
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg">
                    <Table :striped="true"
                            :prevent-overlapping-requests="false"
                            :input-debounce-ms="1000"
                            :prevent-scroll="true" 
                            :resource="customers">
                        <template #cell(actions)="{ item: customer }">
                            <a :href="route('admin.view.customer', customer.id)">
                                View
                            </a>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
