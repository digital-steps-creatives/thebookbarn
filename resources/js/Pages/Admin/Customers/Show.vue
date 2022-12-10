<script setup>
import AppLayout from '@/Layouts/AdminLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";

const props =defineProps({
    customer:Object
})
const form = useForm({
    name: props.customer.name,
    email:props.customer.email
})
const updateCustomer = () => {
    form.post(route('admin.customer.update'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AppLayout :title="'Manage / Customers/ Customer / ' + customer.name">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage / Customers/ Customer / {{customer.name}} <br><Link :href="route('admin.customers')" class="text-secondary-600 text-decoration-none text-sm">Back to Customers</Link>
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="row">
                    <div class="col-sm-4">
                            <div class="bg-white p-8 sm:rounded-lg">
                                <h4>Basic Information</h4>
                                <form id="basic__information" @submit.prevent="updateCustomer">
                                    <div class="mb-3">
                                        <InputLabel for="name" value="Full Names" />
                                        <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required/>
                                        <InputError class="mt-2" :message="form.errors.name" />
                                    </div>
                                    <div>
                                        <InputLabel for="email" value="Email Address" />
                                        <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required/>
                                        <InputError class="mt-2" :message="form.errors.email" />
                                    </div>
                                    <div>
                                        <PrimaryButton class="my-4" :class="{ 'opacity-25':  form.processing }" :disabled="form.processing">
                                            Update Customer Profile
                                        </PrimaryButton>
                                    </div>
                                </form>
                        </div>
                   </div>
                   <div class="col-sm-8">
                        <div class="py-1">
                            <main class="h-full overflow-y-auto">
                                    <div class="mx-auto grid">
                                
                                    
                                    <!-- Cards -->
                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                        <!-- Card -->
                                        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Delivered Orders
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            10
                                            </p>
                                        </div>
                                        </div>
                                        <!-- Card -->
                                        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Quotation Received
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            24
                                            </p>
                                        </div>
                                        </div>
                                        <!-- Card -->
                                        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                            <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Pending Orders
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            376
                                            </p>
                                        </div>
                                        </div>
                                        <!-- Card -->
                                        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        
                                        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Cancelled Orders
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            35
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                        
                                    </div>
                            </main>
                        </div>
                        <div class="p-2 bg-white">
                            <div class="w-full mx-auto bg-white">
            <header class="px-3 py-3 border-b border-gray-100">
                <h4 class="text-sm font-medium text-gray-600 dark:text-gray-400">Orders</h4>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-teal-400 bg-teal-100">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Order#</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Quantity</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Status</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="(customer.orders <= 0)">
                                <td colspan="3">Sorry no Orders found</td>
                            </tr>
                            <tr v-for="(order, key) in customer.orders" :key="key" v-else>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{order.invoice_no}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{order.order_items.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">
                                        <span v-if="order.status ==='waiting quotations from vendors'" class="bg-sky-400 px-3 py-1.5 rounded-full text-white text-xs">pending quotation</span>
                                        <span v-else-if="order.status ==='waiting approval'" class="bg-teal-400 px-3 py-1.5 rounded-full text-white text-xs">pending approval</span>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">
                                        <Link class="text-sm">Manage Order</Link>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
