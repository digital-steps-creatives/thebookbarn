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
                            <div class="px-2 pt-2">
                                <div class="filament-tables-header px-4 py-2 mb-2">
                                    <div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2">
                                        <h2 class="filament-tables-header-heading text-xl font-bold tracking-tight">All Transactions</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="block w-full">
                                <div class="filament-tables-table-container overflow-x-auto relative border-t">
                                        <table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm">
                                            <thead>
                                                <tr class="bg-teal-100">
                                                    <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Id</span></td>
                                                    <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Transaction #</span></td>
                                                    <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Amount</span></td>
                                                    <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Phone</span></td>
                                                    <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Date</span></td>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y whitespace-nowrap">
                                                <tr class="filament-tables-row transition" v-for="(item, index) in recentPayments.pay.data" :key="index">
                                                    <td class="filament-tables-cell"><div class="px-4 py-3">{{index + 1}}</div></td>
                                                    <td class="filament-tables-cell"><div class="px-4 py-3">{{item.MpesaReceiptNumber}}</div></td>
                                                    <td class="filament-tables-cell"><div class="px-4 py-3">{{item.Amount}}</div></td>
                                                    <td class="filament-tables-cell">
                                                        <div class="px-4 py-3"> {{item.PhoneNumber}}</div>
                                                    </td>
                                                    <td class="filament-tables-cell">
                                                        <div class="px-4 py-3"> {{dateTime(item.created_at)}}</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center my-4">
                    <div class="col">
                        <Pagination :links="recentPayments.pay.links"/>
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
import Pagination from '@/Components/Pagination.vue'
import moment from "moment";
export default {
    data() {
        return {
            loader:false,
        }
    },
    props:{
        recentPayments: Object,
    },
    components:{
        AppLayout, Link, Pagination
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
        },
        dateTime(value) {
            return moment(value).format("DD-MM-YYYY");
        },
    },
}
</script>