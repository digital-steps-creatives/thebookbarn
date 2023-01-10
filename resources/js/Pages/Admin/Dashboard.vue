<script>
import AppLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
export default {
    props:{
        ordersPendingReview:Object,
        newvendors: Object,
        newcustomers: Object
    },
    components:{
        AppLayout, Link
    }
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
                                <span>Paid Orders</span>
                            </div>
                            <div class="text-3xl">0</div>
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
                <div class="grid grid-cols-1 filament-widgets-container gap-4 lg:gap-8 mb-6">
                    <div></div>
                    <div class="border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container">
                        <div class="px-2 pt-2">
                            <div class="filament-tables-header px-4 py-2 mb-2">
                                <div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2">
                                    <h2 class="filament-tables-header-heading text-xl font-bold tracking-tight">Orders Pending Review</h2>
                                </div>
                            </div>
                        </div>
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
                                                    <div class="px-4 py-3"> <Link>Approve</Link></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
