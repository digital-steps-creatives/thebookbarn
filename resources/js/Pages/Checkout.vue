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
                delivery_fee:250,
                name: this.user.name,
                email:this.user.email,
                phone:this.user.phone,
            }),
            loading:false,
            checkoutId:null,
            paymentResponse:false,
            paymentMessage:'Transaction Pending'
        }
    },
    methods: {
        async makePayment(){
                this.loading = true;
                try {
                    let payload = {
                        phone: this.form.phone,
                        amount: Math.round(this.orderItems.grand_total + this.form.delivery_fee),
                        invoice_no:this.orderItems.invoice_no,
                        email:this.form.email,
                        delivery_type:this.form.delivery_type,
                        delivery_fee: this.form.delivery_fee,
                        address:this.form.address,
                        name:this.form.name
                    }
                    const response = await axios.post(route('make.mpesa.payment'), payload);
                    if (response.data.status ==200) {
                        Swal.fire({
                            title: response.data.message,
                            icon: 'success',
                            timer: 2000,
                            timerProgressBar: true,
                            showConfirmButton: false
                        });
                        window.location.href= route('myorders');
                    } else if(response.data.status ==='not found') {
                        Swal.fire({
                            title: response.data.message,
                            icon: 'warning',
                            timer: 2000,
                            timerProgressBar: true,
                            showConfirmButton: false
                        });
                        window.location.reload();
                    } else {
                    
                        Swal.fire({
                            title: response.data.message,
                            timer: 2000,
                            icon: 'error',
                            timerProgressBar: true,
                            showConfirmButton: false,
                        });
                        window.location.reload();
                }

			} catch (error) {
				console.log(error);
                Swal.fire({
                    title: error,
                    timer: 2000,
                    icon: 'error',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
			}
        },
        registerurl(){
            window.axios.post(route('register.urls'))
            .then(response => {
                console.log(response)
            })
        },
        checkPaymentStatus(checkoutId){
            this.paymentResponse = true;
            let checkoutPayload = {
                checkoutId: checkoutId,
                invoice_no:this.orderItems.invoice_no,
            }
            window.axios.post(route('confirm.payment'), checkoutPayload)
            .then(response => {
                console.log(response)
                
                if (response.data.status ===1) {
                    this.paymentMessage = response.message;
                    //window.location.href= route('myorders');
                } else if(response.data.status ===5) {
                    this.paymentMessage = response.message;
                    this.checkPaymentStatus(this.checkoutId);
                }
                else if(response.data.status ===1032) {
                    this.paymentMessage = response.message;
                    //this.checkPaymentStatus(this.checkoutId);
                }
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
                
                <div class="row">
                    <div class="col-sm-8">
                       <div class="bg-white p-8">
                        <div class="row">
                            <div class="col-12"><h4>Billing Infomation</h4></div>
                        </div>
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
                                <label for="phone">Phone Number<small class="text-red-600">*</small></label>
                                <input id="phone" type="text" class="form-control" v-model="form.phone" placeholder="Mpesa Phone number to pay from ">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-12">
                                <label for="" class="mb-2">Choose where we should deliver your order <small class="text-red-600">*</small> </label>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="items-center pl-4 rounded border-2 border-gray-200 focus:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">
                                        <input id="home" type="radio" value="home" name="delivery_type" v-model="form.delivery_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="home" class="py-4 ml-2 w-full text-sm font-medium text-gray-900">Deliver at Home</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                    <div class=" items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">
                                        <input id="school" type="radio" value="school" name="delivery_type" v-model="form.delivery_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="school" class="py-4 ml-2 w-full text-sm font-medium text-gray-900">Deliver at School </label>
                                    </div>
                           </div>
                             <!-- <div class="col-4">
                               Column Content 
                                    <div class=" items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">
                                        <input id="pickup" type="radio" value="pickup" name="delivery_type" v-model="form.delivery_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="pickup" class="py-4 ml-2 w-full text-sm font-medium text-gray-900">I want to pick it myself</label>
                                    </div>
                            </div> -->
                        </div>
                        <div v-if="form.delivery_type">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900"><span v-if="form.delivery_type ==='home'">Enter Home Address below</span><span v-else-if="form.delivery_type ==='school'">Enter Name of the School, Student, Admission Number, Class & Address below</span><span v-else>Enter Name of the City/Town you are in</span></label>
                            <textarea id="message" v-model="form.address" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="add more information on where we should deliver the order ..."></textarea>
                        </div>
                       </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="bg-gray-50 p-8">
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
                                <strong>Delivery Fee</strong> KES {{ parseInt(this.form.delivery_fee) }}
                            </p>
                            <p>
                                <strong>Total</strong> KES {{orderItems.grand_total + parseInt(this.form.delivery_fee)}}
                            </p>
                            <div class="mt-5">
                                <div class="py-4 alert alert-info">
                                    Note: We are only delivering in Nairobi only
                                </div>
                                <button class="text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white" @click="makePayment">
                                    <div v-if="loading" class="flex">
                                            <div class="spinner-border" role="status"></div>
                                            <span class="ml-2">Please wait, Loading...</span>
                                    </div>
                                    <span v-else>Make Payment</span>
                                </button>
                                <!-- <button @click="registerurl">Register url</button> -->
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="paymentResponse" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Check Payment Status
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              {{ paymentMessage }}
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button id="retry-payment" class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="makePayment">
              Retry Payment
            </button>
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="checkPaymentStatus(checkoutId)" id="confirm-payment">
              Confirm Payment again
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="paymentResponse" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </AppLayout>
</template>
