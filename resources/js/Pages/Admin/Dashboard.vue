<script>
import AppLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Search from '@/Components/MySearch.vue';
export default {
    props:{
        ordersPendingReview:Object,
        newvendors: Object,
        newcustomers: Object,
        recentPayments: Object,
    },
    data() {
        return {
            resultsLimit:5,
            showModal: false
        }
    },
    components:{
        AppLayout, Link, Search
    },
    computed:{
        transactions() {
            return this.recentPayments.pay.data.slice(0, this.resultsLimit)
        },
        totalAmount() {
            var itemsTotal = 0;
            var subitems = this.recentPayments.pay.data;
            var subItemsTotal = 0;
            for (var key in subitems) {
                var subitem = subitems[key];
                subItemsTotal = subItemsTotal + subitem.Amount;
            }
            itemsTotal += subItemsTotal;
            return itemsTotal;
        }
    },
    methods: {
        toggleModal(id){
            this.showModal = id;
        },
        closeModal() {
            this.showModal = false;
        },
        roundFormat: function (value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(decimals);
        },
        currencyFormat: function (value, decimals, symbol='KES ') {
            return symbol + this.roundFormat(value,2);
        },
        
    },
}
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1   lg:grid-cols-2   filament-widgets-container gap-4 lg:gap-8 mb-6">
                    <div class="">
                        <h2 class="text-lg sm:text-xl font-bold tracking-tight">Welcome, {{$page.props.user.name}}</h2>
                    </div>
                </div>
                <div class="filament-stats grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-4 mb-8">
                    <div class="filament-stats-card relative p-6 rounded-2xl bg-white shadow filament-stats-overview-widget-card">
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500">
                                <span>New Vendors</span>
                            </div>
                            <div class="text-3xl">{{ newvendors }}</div>
                        </div>
                    </div>
                    <div class="filament-stats-card relative p-6 rounded-2xl bg-purple-100 shadow filament-stats-overview-widget-card">
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500">
                                <span>Orders Pending</span>
                            </div>
                            <div class="text-3xl">0</div>
                        </div>
                    </div>
                    <div class="filament-stats-card relative p-6 rounded-2xl bg-orange-100 shadow filament-stats-overview-widget-card">
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500">
                                <span>Paid Amount</span>
                            </div>
                            <div class="text-3xl">{{currencyFormat(totalAmount)}}</div>
                        </div>
                    </div>
                    <div class="filament-stats-card relative p-6 rounded-2xl bg-green-100 shadow filament-stats-overview-widget-card">
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500">
                                <span>New Customers</span>
                            </div>
                            <div class="text-3xl">{{ newcustomers }}</div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 filament-widgets-container gap-4 lg:gap-8 mb-6">
                    
                    <div class="border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container">
                        <div class="px-2 pt-2">
                            <div class="filament-tables-header px-4 py-2 mb-2">
                                <div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2">
                                    <h2 class="filament-tables-header-heading text-xl font-bold tracking-tight">Orders Pending Review</h2>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full">
                            <div class="filament-tables-table-container overflow-x-auto relative border-t">
                                    <table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm">
                                        <thead>
                                            <tr class="bg-teal-100">
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Id</span></td>
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Order #</span></td>
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Status</span></td>
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Action</span></td>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y whitespace-nowrap">
                                            <tr class="filament-tables-row transition" v-for="(item, index) in ordersPendingReview" :key="index">
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{index + 1}}</div></td>
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.invoice_no}}</div></td>
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.status}}</div></td>
                                                <td class="filament-tables-cell">
                                                    <div class="px-4 py-3"> 
                                                        <span v-on:click="toggleModal(index)" class="cursor-pointer hover:text-green-500 border py-2 px-3 rounded-full border-slate-300 hover:border-green-500">Approve</span>
                                                        <div v-if="showModal === index" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                                            <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                                                <!--content-->
                                                                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                <!--header-->
                                                                <div class="flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                                                                    <h3 class="text-3xl font-semibold">
                                                                    Approving order {{item.invoice_no}}
                                                                    </h3>
                                                                    <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                                                                    <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                        ×
                                                                    </span>
                                                                    </button>
                                                                </div>
                                                                <!--body-->
                                                                <div class="relative p-6 flex-auto">
                                                                    <div class="flex w-full">
                                                                        <div class="grid gap-4 grid-cols-3 grid-rows-3">
                                                                            <div>
                                                                                <h4>Order Items</h4>
                                                                                <table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm">
                                                                                    <thead>
                                                                                        <tr class="bg-green-600">
                                                                                            <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-white cursor-default">Item </span></td>
                                                                                            <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-white cursor-default">Quantity </span></td>
                                                                                            <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-white cursor-default">Level/Class </span></td>
                                                                                            
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody class="divide-y whitespace-nowrap">
                                                                                        <tr v-for="product in item.order_items" :key="product.id" class="filament-tables-row transition">
                                                                                            <td class="filament-tables-cell"><div class="px-4 py-3">{{ product.product }}</div></td>
                                                                                            <td class="filament-tables-cell"><div class="px-4 py-3">{{ product.quantity }}</div></td>
                                                                                            <td class="filament-tables-cell"><div class="px-4 py-3">{{item.class}}/ {{ item.level }}</div></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div>
                                                                                <Search />
                                                                            </div>
                                                                            <div>hi</div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <!--footer-->
                                                                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                    <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                                                    Close
                                                                    </button>
                                                                    <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                                                    Save Changes
                                                                    </button>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="showModal === index" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                    <div class="border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container">
                        <div class="px-2 pt-2">
                            <div class="filament-tables-header px-4 py-2 mb-2">
                                <div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2">
                                    <h2 class="filament-tables-header-heading text-xl font-bold tracking-tight">Recent Payments</h2>
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
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y whitespace-nowrap">
                                            <tr class="filament-tables-row transition" v-for="(item, index) in transactions" :key="index">
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{index + 1}}</div></td>
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.MpesaReceiptNumber}}</div></td>
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.Amount}}</div></td>
                                                <td class="filament-tables-cell">
                                                    <div class="px-4 py-3"> {{item.PhoneNumber}}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="w-full py-3 flex justify-center">
                                        <Link :href="route('admin.view.payment')" class="text-center">view all transactions</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
 

    </AppLayout>
</template>
