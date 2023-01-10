<script>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Sidebar from '@/Components/Sidebar.vue';
export default {
    props: {
        title: String,
    },
    components:{
        Sidebar, Link, Dropdown, DropdownLink
    },
    data() {
        return {
            showingNavigationDropdown:ref(false),
            openSidebar: false,
            currentmenu:false
        }
    },
    methods: {
        logout(){
            Inertia.post(route('logout'));
        },
        switchToTeam(team) {
            Inertia.put(route('current-team.update'), {
                team_id: team.id,
            }, {
                preserveState: false,
            });
        },
        toggleMenu(){
            this.openSidebar = true;
            this.$emit('checkSidebar', this.openSidebar)
        },
        closeMenu(){
            this.openSidebar = false;
            this.$emit('checkSidebar', this.openSidebar)
        },
    },
    computed:{
        isOpen()
        {
            if (this.openSidebar ===true) {
                return "filament-sidebar-open translate-x-0 max-w-[20em] lg:max-w-[var(--sidebar-width)]' : '-translate-x-full lg:translate-x-0 lg:max-w-[var(--collapsed-sidebar-width)] rtl:lg:-translate-x-0 rtl:translate-x-full";
            }
        },
        hasSidebar()
        {
            if (this.openSidebar ===true) {
                return "lg:pl-[var(--collapsed-sidebar-width)]";
            }else {
                return "lg:pl-[var(--sidebar-width)] filament-main-sidebar-open";
            }
        },
        currentMenu()
        {
            if(this.currentmenu ===true) {
                return "bg-primary-500 text-white";
            }
        }
    }
}

</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="filament-app-layout flex w-full min-h-screen overflow-x-clip bg-gray-50">
            <aside :class="isOpen" class="filament-sidebar fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 z-20 flex flex-col h-screen overflow-hidden shadow-2xl transition-all bg-white lg:border-r rtl:lg:border-r-0 rtl:lg:border-l w-[var(--sidebar-width)] lg:z-0 filament-sidebar-open translate-x-0 max-w-[20em] lg:max-w-[var(--sidebar-width)]">
                <header class="filament-sidebar-header border-b h-[4rem] shrink-0 flex items-center justify-center">
                    <div class="flex items-center jusify-center px-6 w-full lg:px-4"  v-if="openSidebar ===false">
                        <Link class="block w-full lg:ml-3 text-decoration-none">
                            <div class="filament-brand text-xl font-bold tracking-tight">The Book Barn</div></Link>
                        <button @click="toggleMenu" class="filament-sidebar-collapse-button shrink-0 hidden lg:flex items-center justify-center w-10 h-10 text-primary-500 rounded-full hover:bg-gray-500/5 focus:bg-primary-500/10 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                    <button v-if="openSidebar ===true" @click="closeMenu" class="filament-sidebar-close-button shrink-0 flex items-center justify-center w-10 h-10 text-primary-500 rounded-full hover:bg-gray-500/5 focus:bg-primary-500/10 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </header>
                <nav class="flex-1 py-6 overflow-x-hidden overflow-y-auto filament-sidebar-nav">
                    <ul class="px-6 space-y-6">
                        <li class="filament-sidebar-item" :class="{'filament-sidebar-item-active': route().current('admin.dashboard')}">
                            <Link :href="route('admin.dashboard')" :class="{ 'bg-primary-500 text-white': route().current('admin.dashboard')}" class="text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5">
                                <svg class="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                <div class="flex flex-1" v-if="openSidebar ===false"><span>Dashboard</span></div>
                            </Link>
                        </li>
                        <li class="filament-sidebar-item" :class="{'filament-sidebar-item-active': route().current('admin.customers')}">
                            <Link :href="route('admin.customers')" :class="{ 'bg-primary-500 text-white': route().current('admin.customers')}" class="text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <div class="flex flex-1" v-if="openSidebar ===false"><span>Manage Customers</span></div>
                            </Link>
                        </li>
                        <li class="filament-sidebar-item" :class="{'filament-sidebar-item-active': route().current('admin.affiliates')}">
                            <Link :href="route('admin.affiliates')" :class="{ 'bg-primary-500 text-white': route().current('admin.affiliates')}" class="text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <div class="flex flex-1" v-if="openSidebar ===false"><span>Manage Affiliates</span></div>
                            </Link>
                        </li>
                        <li class="filament-sidebar-item" :class="{'filament-sidebar-item-active': route().current('admin.manage.products')}">
                            <Link :href="route('admin.manage.products')" :class="{ 'bg-primary-500 text-white': route().current('admin.manage.products')}" class="text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                                <div class="flex flex-1" v-if="openSidebar ===false"><span>Manage Products</span></div>
                            </Link>
                        </li>
                        <li class="filament-sidebar-item" :class="{'filament-sidebar-item-active': route().current('admin.view.payment')}">
                            <Link :href="route('admin.view.payment')" :class="{ 'bg-primary-500 text-white': route().current('admin.view.payment')}" class="text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                                <div class="flex flex-1" v-if="openSidebar ===false"><span>Manage Payments</span></div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div :class="hasSidebar" class="filament-main flex-col gap-y-6 w-screen flex-1 rtl:lg:pl-0 h-full transition-all">
                <!-- Page Heading -->
                <header v-if="$slots.header" class="filament-main-topbar sticky top-0 z-10 flex h-16 w-full shrink-0 items-center border-b bg-white">
                    <div class="flex items-center w-full px-4 sm:px-6 md:px-6 lg:px-8">
                        <div class="flex items-center justify-between flex-1">
                            <div><slot name="header" /></div>
                            <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                                <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                                            </button>

                                            <span v-else class="inline-flex rounded-md">
                                                <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                                    {{ $page.props.user.name }}

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <!-- Account Management -->
                                            <div class="block px-4 py-2 text-xs text-gray-400">
                                                Manage Account
                                            </div>

                                            <DropdownLink :href="route('admin.profile')">
                                                Profile
                                            </DropdownLink>

                                            <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                                                API Tokens
                                            </DropdownLink>

                                            <div class="border-t border-gray-100" />

                                            <!-- Authentication -->
                                            <form @submit.prevent="logout">
                                                <DropdownLink as="button">
                                                    Log Out
                                                </DropdownLink>
                                            </form>
                                        </template>
                            </Dropdown>
                        </div>
                    </div>
                </header>

                <!-- Page Content -->
                <main>
                    <div class="container my-4">
                        <div class="row justify-content-center">
                            <div class="col-sm-9">
                                <!-- flash message start -->
                                    <div
                                        v-if="$page.props.flash.success"
                                        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                                        role="alert"
                                    >
                                        <span class="font-medium">
                                            {{ $page.props.flash.success }}
                                        </span>
                                    </div>
                                    <div
                                        v-if="$page.props.flash.error"
                                        class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                        role="alert"
                                    >
                                        <span class="font-medium">
                                            {{ $page.props.flash.error }}
                                        </span>
                                    </div>
                                    <!-- flash message end -->
                            </div>
                        </div>
                    </div>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
