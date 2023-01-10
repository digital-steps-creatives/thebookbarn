<script setup>
import AppLayout from '@/Layouts/AdminLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import { ref } from '@vue/runtime-core';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
defineProps({
    products:Object
})
const showModal = ref(false)
const toggleModal=(product)=>{
      showModal.value = !showModal.value;
}
</script>

<template>
    <AppLayout title="Products">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Products
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="toolbar px-4 justify-end flex">
                        <Link :href="route('admin.add.product')" class="mb-2 btn btn-primary text-white">Add Products</Link>
                    </div>
                    <Table :striped="true"
                            :prevent-overlapping-requests="false"
                            :input-debounce-ms="1000"
                            :prevent-scroll="true" 
                            :resource="products">
                        <template #cell(subject_id)="{ item: product }">
                            <span v-if="product.subject">{{product.subject.name}}</span><span v-else>N/A</span>
                        </template>
                        <template #cell(class_level_id)="{ item: product }">
                            <span v-if="product.classlevel?.level ==='primary'">Class/Level {{product.classlevel.class}}</span>
                            <span v-else-if="product.classlevel?.level ==='secondary'">Form/Level {{product.classlevel.class}}</span>
                            <span v-else>N/A</span>
                        </template>
                        <template #cell(featured_image)="{ item: product }">
                            <img :src="product.featured_image" v-if="product.featured_image" class="w-12 h-12 rounded">
                        </template>
                        <template #cell(status)="{ item: product }">
                            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-800" v-if="(product.status ==='true')">active</span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300" v-else>inactive</span>
                        </template>
                        <template #cell(actions)="{ item: product }">
                            <a :href="route('admin.manage.product', product.id)">
                                Edit
                            </a>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
