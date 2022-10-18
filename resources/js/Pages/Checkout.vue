<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    props:{
        user: Object
    },
    data() {
        return {
            orderItems:{},
            form:useForm({
                address: null,
                delivery_type: 'home',
                name: this.user.name,
                email:this.user.email,
                phone:this.user.phone,
            }),
            loading:false
        }
    },
    methods: {
        makePayment(){
            this.loading = true;
            let payload = {
                phone: this.form.phone,
                amount: this.orderItems.grand_total,
                invoice_no:this.orderItems.invoice_no
            }
            window.axios.post(route('make.mpesa.payment'), payload)
            .then(response => {
                console.log(response)
                this.loading = false;
            })
        },
        registerurl(){
            window.axios.post(route('register.urls'))
            .then(response => {
                console.log(response)
            })
        }
    },
    mounted() {
        window.axios.get(route('get.orders', localStorage.getItem('orderItemready')))
        .then(response => {
            this.orderItems= response.data.order
        })
    },
    components:{
        AppLayout
    }
}
</script>

<template>
    <AppLayout title="Checkout">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Checkout
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h4>Billing Infomation</h4>
                <div class="row">
                    <div class="col-sm-8">
                       <div class="bg-white p-8">
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label for="name">Name</label>
                                <input id="name" type="text" class="form-control" v-model="form.name">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-6">
                                <label for="email">Email</label>
                                <input id="email" type="text" class="form-control" v-model="form.email">
                            </div>
                            <div class="col-sm-6">
                                <label for="phone">Phone <small>Mpesa Phone number to pay from</small></label>
                                <input id="phone" type="text" class="form-control" v-model="form.phone">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-12">
                                <label for="" class="mb-2">Choose where we should deliver your order</label>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-4">
                                <div class="items-center pl-4 rounded border-2 border-gray-200 focus:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">
                                        <input id="home" type="radio" value="home" name="delivery_type" v-model="form.delivery_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="home" class="py-4 ml-2 w-full text-sm font-medium text-gray-900">Home Address</label>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                    <div class=" items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">
                                        <input checked id="school" type="radio" value="school" name="delivery_type" v-model="form.delivery_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="school" class="py-4 ml-2 w-full text-sm font-medium text-gray-900">School Address</label>
                                    </div>
                            </div>
                            <div class="col-4">
                                <!-- Column Content -->
                                    <div class=" items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">
                                        <input checked id="pickup" type="radio" value="pickup" name="delivery_type" v-model="form.delivery_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="pickup" class="py-4 ml-2 w-full text-sm font-medium text-gray-900">I want to pick it myself</label>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Physical Address</label>
                            <textarea id="message" v-model="form.address" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="add more information on where we should deliver the order ..."></textarea>
                        </div>
                       </div>
                    </div>
                    <div class="col-sm-4">
                        <h4>Order Infomation</h4>
                        <h5>Books</h5>
                        <hr>
                        <ul class="pl-0 mb-4">
                            <li v-for="(items, index) in orderItems.order_items" :key="index">
                                <div class="flex mb-2" style="max-height: 230px">
                                    <div class="h-16 w-16 mr-2">
                                        <img :src="items.product.featured_image" :alt="items.product.name" class="w-full h-full object-cover">
                                    </div>
                                    <p><strong>{{items.product.name}}</strong>
                                        <br>
                                        <span><strong>Price: </strong>KES {{items.amount}}</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <hr>
                        <div>
                            <p>
                                <strong>Sub total</strong> KES {{orderItems.sub_total}}
                            </p>
                            <p>
                                <strong>Tax charged</strong> KES {{parseInt(orderItems.grand_total - orderItems.sub_total)}}
                            </p>
                            <p>
                                <strong>Total</strong> KES {{orderItems.grand_total}}
                            </p>
                            <div class="mt-5">
                                <button class="text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white" @click="makePayment">
                                    <div v-if="loading" class="flex">
                                            <div class="spinner-border" role="status"></div>
                                            <span class="ml-2">Please wait, Loading...</span>
                                    </div>
                                    <span v-else>Make Payment</span>
                                </button>
                                <button @click="registerurl">Register url</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
