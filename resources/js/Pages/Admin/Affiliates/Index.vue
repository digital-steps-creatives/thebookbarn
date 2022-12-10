<script setup>
import AppLayout from '@/Layouts/AdminLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
defineProps({
    affiliates:Object
})
</script>

<template>
    <AppLayout title="Affiliates">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Affiliates
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="toolbar px-4 justify-end flex">
                        <Link :href="route('admin.add.product')" class="mb-2 btn btn-primary text-white">Add affiliate</Link>
                    </div>
                    <Table :striped="true"
                            :prevent-overlapping-requests="false"
                            :input-debounce-ms="1000"
                            :prevent-scroll="true" 
                            :resource="affiliates">
                        <template #cell(actions)="{ item: affiliate }">
                            <a :href="route('admin.view.affiliate', affiliate.id)">
                                View
                            </a>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
