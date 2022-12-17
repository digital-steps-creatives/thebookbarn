<script setup>
import AppLayout from '@/Layouts/VendorsLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import moment from 'moment';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Pagination from '@/Components/Pagination.vue'

defineProps({
    orders:Object
})
const dateTime = (value) => {
    return moment(value).format('lll');
}
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Quotation Requests
            </h2>
        </template>

        <div class="container my-12">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                        <div class="my-6">
                            <div v-if="orders" class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead class="text-xs text-white uppercase bg-green-600">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">Order No #</th>
                                            <th scope="col" class="py-3 px-6">Quantity</th>
                                            <th scope="col" class="py-3 px-6">Date</th>
                                            <th scope="col" class="py-3 px-6">Status</th>
                                            <th scope="col" class="py-3 px-6">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  v-for="(item, index) in orders.data" :key="index" class="bg-white border-b">
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{item.invoice_no}}</th>
                                            <td class="py-4 px-6">{{item.order_items?.length}}</td>
                                            <td class="py-4 px-6">{{dateTime(item.created_at)}}</td>
                                            <td class="py-4 px-6"><span v-if="item.status ==='waiting quotations from vendors'" class="bg-sky-400 px-3 py-1.5 rounded-full text-white text-xs">pending quotation</span></td>
                                            <td class="py-4 px-6"><Link :href="route('orders.order', item.id)" class="text-decoration-none h-10 px-6 py-2.5 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white">Send a Quotation</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                            <div v-else>
                                <div class="alert alert-info" role="alert">
                                    <p>Sorry you dont have any orders</p>
                                    <Link href="/" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 inline-flex">Add books to this cart
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div class="row justify-content-center">
                    <div class="col">
                        <Pagination :links="orders.links"/>
                    </div>
                </div>
       </div>
    </AppLayout>
</template>
