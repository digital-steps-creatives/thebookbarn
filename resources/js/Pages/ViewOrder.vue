<template>
    <master-layout :title="'Order #' + order.invoice_no">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Order #{{order.invoice_no}}
            </h2>
        </template>
       <div class="container my-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="row justify-content-center">
                    <div class="col-9 col-lg-6">
                            <div class="my-6">
                                <div class="timeline">
      
                                    <div class="mb-5">
                                        <h3>Order Updates</h3>
                                    <label>Order Created at {{dateTime(order.created_at)}}</label>
                                    </div>
                                    
                                    
                                    <div class="box">
                                        
                                        <div class="container">
                                        
                                            <div class="lines">
                                                <div class="dot" v-for="log in order.order_logs" :key="log.id"></div>
                                                <div class="line" v-for="log in order.order_logs" :key="log.id"></div>
                                                <div class="dot" v-for="log in order.order_logs" :key="log.id"></div>
                                            </div>
                                            
                                            <div class="cards">
                                                <div class="card" v-for="log in order.order_logs" :key="log.id">
                                                    <h4 class="bg-primary p-2">{{log.action}}</h4>
                                                    <span style="font-size:13px">{{dateDayTime(log.created_at)}}</span>
                                                    <p>{{log.description}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    </master-layout>
    </template>
    
    <script>
    import { defineComponent } from 'vue';
    import moment from 'moment';
    import MasterLayout from '@/Layouts/AppLayout.vue';
    import { Head, Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
      name: 'OrderPage',
      props:["order"],
      components: {MasterLayout, Head, Link },
      data() {
        return {
          loading:false
        }
      },
        methods: {
            dateTime(value) {
                return moment(value).format('lll');
            },
            dateDayTime(value){
                return moment(value).format('MMMM Do YYYY, h:mm:ss a');
            },
            moveToCheckout(order) {
                localStorage.removeItem('orderItemready')
                this.loading = true;
                localStorage.setItem('orderItemready', JSON.stringify(order))
                window.location.href = route('checkout.order.final')
            }
        }
    });
    </script>
    