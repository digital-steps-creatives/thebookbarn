<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import TheFooter from '@/Components/TheFooter.vue';
import CartDropdown from '@/frontend/components/partials/CartDropdown.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    Inertia.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    Inertia.post(route('logout'));
};
</script>


<template>
    <div class="bg-gray-100">
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen justify-center flex items-center filament-login-page">
            <!-- Page Content -->
            <main class="px-6 -mt-16 md:mt-0 md:px-2 max-w-md space-y-8 w-screen">
                <slot />
            </main>
        </div>
    </div>
</template>
