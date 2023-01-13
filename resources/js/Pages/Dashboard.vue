<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import { ref } from '@vue/runtime-core';
import moment from 'moment';

defineProps({
    orders:Object,
    deliveriesCount:String,
    quotsCount:String,
    greetings:String
})
const dateTime = (value) => {
        return moment(value).format('lll');
    }
const moveToCheckout = (order) => {
        localStorage.removeItem('orderItemready')
        loading.value = true;
        localStorage.setItem('orderItemready', JSON.stringify(order))
        window.location.href = route('checkout.order.final')
    }
const loading = ref(false)
</script>

<template>
    <AppLayout title="My Account">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                My Account
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="font-bold text-xl text-gray-800 leading-none mb-4 mt-4 px-4">{{greetings}}, {{ $page.props.user.name }}</div>
                    <div class="flex grid sm:grid-cols-3 grid-cols-1 gap-3 my-8 px-4">
                        <Link class="border rounded p-4 text-decoration-none block">
                            <div class="grid__icon mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>

                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <h4>Orders</h4>
                                    <small>Track your order</small>
                                </div>
                                <div>
                                    <p class="text-gray-600 ml-2 font-medium text-2xl" v-if="orders.length >0">
                                        {{orders.length}}
                                    </p>
                                    <p class="text-gray-600 ml-2 font-medium text-2xl" v-else>
                                       0
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link class="border rounded p-4 text-decoration-none block">
                            <div class="grid__icon mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-orange-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <h4>Deliveries</h4>
                                    <small>deliveries</small>
                                </div>
                                <div>
                                    <p class="text-gray-600 ml-2 font-medium text-2xl" v-if="deliveriesCount.length >0">
                                        {{deliveriesCount.length}}
                                    </p>
                                    <p class="text-gray-600 ml-2 font-medium text-2xl" v-else>
                                       0
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link class="border rounded p-4 text-decoration-none block">
                            <div class="grid__icon mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-teal-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>

                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <h4>Your Quotations</h4>
                                    <small>Track your quotations</small>
                                </div>
                                <div>
                                    <p class="text-gray-600 ml-2 font-medium text-2xl" v-if="quotsCount.length >0">
                                        {{quotsCount.length}}
                                    </p>
                                    <p class="text-gray-600 ml-2 font-medium text-2xl" v-else>
                                       0
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="block mt-5 w-full">
                        <Table 
                                :striped="true"
                                :prevent-overlapping-requests="false"
                                :input-debounce-ms="1000"
                                :prevent-scroll="true" 
                                :resource="orders">
                                <template #head>
                                    <tr>
                                        <th>
                                            <div class="py-3 px-6 w-full"><span class="flex flex-row items-center"><span class="uppercase">Order #</span><!----></span></div>
                                        </th>
                                        <th class="py-3 px-6 hidden sm:table-cell">
                                            <div class="w-full"><span class="flex flex-row items-center"><span class="uppercase">Quantity</span><!----></span></div>
                                        </th>
                                        <th class="py-3 px-6 hidden sm:table-cell">
                                            <div class="w-full"><span class="flex flex-row items-center"><span class="uppercase">Date</span><!----></span></div>
                                        </th>
                                        <th scope="col" class="py-3 px-6 hidden sm:table-cell">Price</th>
                                        <th class="py-3 px-6 hidden sm:table-cell">
                                            <div class="w-full"><span class="flex flex-row items-center"><span class="uppercase">Status</span><!----></span></div>
                                        </th>
                                        
                                        <th class="py-3 px-6">
                                            <div class="w-full"><span class="flex flex-row items-center"><span class="uppercase">Actions</span><!----></span></div>
                                        </th>
                                    </tr>
                                </template>
                                <template #body>
                                    <tr  v-for="(item, index) in orders" :key="index" class="bg-white border-b">
                                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"><Link :href="route('view.order.status', item.id)" class="text-decoration-none">
                                                    {{item.invoice_no}}
                                                </Link>
                                                <div class="my-1 visible sm:hidden" style="font-size:13px">
                                                        {{dateTime(item.created_at)}} <br>
                                                       <div class="mt-2">
                                                            <span v-if="item.status ==='waiting quotations from vendors'" class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs">pending quotation</span>
                                                            <span v-if="item.status ==='pending acceptance'" class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">pending acceptance</span>
                                                            <span v-if="item.status ==='waiting approval'" class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">waiting approval</span>
                                                            <span v-if="item.status ==='pending payment'" class="bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">pending payment</span>
                                                            <span v-if="item.status ==='paid'" class="bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs">paid</span>
                                                        </div>
                                                </div>
                                                </th>
                                                <td class="py-4 px-6 hidden sm:table-cell">{{item.order_items?.length}}</td>
                                                <td class="py-4 px-6 hidden sm:table-cell">{{dateTime(item.created_at)}}</td>
                                                <td class="py-4 px-6 hidden sm:table-cell">
                                                    <span v-if="item.grand_total">Kes {{item.grand_total}}</span> 
                                                    <span v-else>n/a</span> 
                                                </td>
                                                <td class="py-4 px-6  hidden sm:table-cell">
                                                    <div class="mt-2">
                                                        <span v-if="item.status ==='waiting quotations from vendors'" class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs">pending quotation</span>
                                                        <span v-else-if="item.status ==='pending acceptance'" class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">pending acceptance</span>
                                                        <span v-else-if="item.status ==='waiting approval'" class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">waiting approval</span>
                                                        <span v-else-if="item.status ==='pending payment'" class="bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">pending payment</span>
                                                        <span v-else-if="item.status ==='paid'" class="bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs">paid</span>
                                                    </div>
                                                </td>
                                                <td class="py-4 px-6">
                                                    <Link :href="route('view.order.final', item.id)" class="text-decoration-none h-10 px-6 py-2.5 hover:bg-green-400 font-semibold rounded-md bg-green-600 text-white" v-if="item.status ==='pending acceptance'">Accept Quotation</Link>
                                                    <button class="text-decoration-none h-10 px-6 py-2.5 hover:bg-orange-400 font-semibold rounded-md bg-orange-600 text-white" v-else-if="item.status ==='pending payment'" @click="moveToCheckout(item.id)">Pay Order</button>
                                                    <span v-else>...</span>
                                                </td>
                                            </tr>
                                </template>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
