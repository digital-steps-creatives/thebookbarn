<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { ref } from '@vue/runtime-core';
import axios from 'axios';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";

const generatedCode = ref(null);
const generateCode = (code) => {
    spinner.value=true;
    axios.post(route('referral.code.create'))
    .then((response) => {
        generatedCode.value = response.data.referral;
        window.location.reload();
        spinner.value=false;
    })
};
const spinner = ref(false)
const form = useForm({
    code: '',
});
const copyToClipboard = () => {
        this.$refs.generator.focus();
        document.execCommand('copy');
        Swirl.toast.open('Copied!');
    }
defineProps({
    refcodes:Object,
    greetings:String
})
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-4 px-4">
                <div class="mb-5">
                    <div class="font-bold text-xl text-gray-800 leading-none mb-4">{{greetings}}, {{ $page.props.user.name }}</div>
                    <h2 class="font-normal text-2xl text-primary">Affiliate Program</h2>
                    <p>Share your referral code to potential customers and earn a commission.</p>
                </div>
                <div class="overflow-hidden shadow-sm sm:rounded-lg mb-4 ">
                   <div class="bg-green-600  sm:px-5 py-2 sm:flex block justify-between px-4">
                        <div>
                            <h4 class="text-white">Affiliate Stats</h4>
                        </div>
                        <div>
                            <span class="text-white">(Updates after every 30 minutes)</span>
                        </div>
                   </div>
                   
                    <div class="sm:px-5 px-3 py-4 pb-5 bg-white">
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">0</div>
                                <div class="mt-2">Referrals</div>
                                </div>
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">{{refcodes.data.length}}</div>
                                <div class="mt-2">Ref Codes Generate</div>
                                </div>
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">0</div>
                                <div class="mt-2">Total Earnings</div>
                                </div>
                                <div class="p-4 bg-green-100 rounded-xl text-gray-800">
                                <div class="font-bold text-2xl leading-none">0</div>
                                <div class="mt-2">Paid Commissions</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                   <div class="bg-green-600  sm:px-5 py-2 sm:flex block justify-between px-4">
                    <h4 class="text-white mb-2">Referral Codes</h4>
                    <button type="submit" class="btn btn-primary block text-white" @click="generateCode">
                        <div class="spinner-border spinner-border-sm text-light" role="status" v-if="spinner">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <span v-else>Generate ref code</span>
                    </button>
                        
                   </div>
                   
                    <div class="sm:px-5 px-0 py-4 pb-5 bg-white">
                        <div class="row">
                            <div class="col-sm-12" id="unstyle">
                                <Table :striped="true"
                                        :prevent-overlapping-requests="false"
                                        :input-debounce-ms="1000"
                                        :prevent-scroll="true" 
                                        :resource="refcodes">
                                        <template #cell(status)="{ item: code }">
                                            <div>
                                                <span v-if="code.status ==='not used'" class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs">{{code.status}}</span>
                                                <span v-else-if="code.status ==='used'" class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs">{{code.status}}</span>
                                            </div>
                                            
                                        </template>
                                </Table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
