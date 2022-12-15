<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { ref } from '@vue/runtime-core';
import axios from 'axios';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

const generatedCode = ref(null);
const generateCode = () => {
    axios.get(route('referral.code.create'))
    .then((response) => {
        generatedCode.value = response.data.referral;
    })
};
const form = useForm({
    code: '',
});
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-4">
                <div class="mb-5">
                    <div class="font-bold text-xl text-gray-800 leading-none mb-4">Good day, {{ $page.props.user.name }}</div>
                    <h2 class="font-normal text-2xl text-primary">Affiliate Program</h2>
                    <p>Share your referral code to potential customers and earn a commission.</p>
                </div>
                <div class="overflow-hidden shadow-xl sm:rounded-lg mb-4">
                   <div class="bg-green-600  px-5 py-2 flex justify-between">
                        <div>
                            <h4 class="text-white">Affiliate Stats</h4>
                        </div>
                        <div>
                            <span class="text-white">(Updates after every 30 minutes)</span>
                        </div>
                   </div>
                   
                    <div class="px-5 py-4 pb-5 bg-white">
                            <div class="grid grid-cols-4 gap-4">
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">20</div>
                                <div class="mt-2">Referrals</div>
                                </div>
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">5,5</div>
                                <div class="mt-2">Balance</div>
                                </div>
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">20</div>
                                <div class="mt-2">Total Earnings</div>
                                </div>
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">5,5</div>
                                <div class="mt-2">Paid Commissions</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="overflow-hidden shadow-xl sm:rounded-lg">
                   <div class="bg-green-600  px-5 py-2 flex justify-between">
                        <div>
                            <h4 class="text-white">Referral Codes</h4>
                        </div>
                        
                   </div>
                   
                    <div class="px-5 py-4 pb-5 bg-white">
                        <div class="row">
                            <div class="col-sm-8">

                            </div>
                            <div class="col-sm-4">
                                <h4>Generate Code</h4>
                                <hr>
                                <form>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary block mb-3 text-white" @click="generateCode">Generate ref code</button>
                                    </div>
                                    <div class="code-generated p-3 bg-gray-800 text-center rounded">
                                        {{ generatedCode }}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
