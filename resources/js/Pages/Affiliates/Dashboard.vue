<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
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
                <div class="mb-5">
                    <h2>Affiliate Program</h2>
                    <p>Share your referral code to potential customers and earn 10% of their purchase when they make payment.</p>
                </div>
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                   <div class="p-4 flex">
                        <div class="justify-start">
                            <h4>Affiliate Stats</h4>
                        </div>
                        <div class="justify-end">
                            (Updates after every 30 minutes)
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
