<template>
	<div class="sidebar w-full h-full flex flex-col py-4 fixed bg-white left-0 pt-0 px-3 shadow-md">
         <!-- Logo -->
        <div class="shrink-0 flex items-center mb-6">
            <Link :href="route('dashboard')">
                <ApplicationLogo class="block h-12 w-auto" />
            </Link>
        </div>
        <div class="mt-4 flex flex-col">
            <p class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">My Menus</p>
            <NavLink :href="route('customer.orders')" :active="route().current('customer.orders')" class="flex items-center p-1 pl-4 hover:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex items-center justify-center icon h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                <p class="mx-4 text-sm tracking-wider">Orders</p>
            </NavLink>
            <NavLink :href="route('customer.profile')" :active="route().current('customer.profile')" class="flex items-center p-1 pl-4 hover:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex items-center justify-center icon h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <p class="mx-4 text-sm tracking-wider">Profile</p>
            </NavLink>
        </div>
    </div>
</template>

<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
    import ApplicationLogo from '../shared/ResponsiveLogo.vue';
    import Dropdown from '@/Components/Dropdown.vue';
    import DropdownLink from '@/Components/DropdownLink.vue';
    import NavLink from '@/Components/NavLink.vue';
    import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    z-index: 20;
    height: 100vh;
    width: 16rem;
    flex-shrink: 0;
    overflow: hidden;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
