<script>
import AppLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import FormInputGroup from '@/frontend/components/form/InputGroup.vue';
import FormButton from '@/frontend/components/form/Button.vue';
import RemoveIconButton from "@/frontend/components/shared/RemoveIconButton.vue";
import Search from '@/Components/MySearch.vue';
import { mapGetters, mapMutations } from "vuex";
import store from '@/store';

export default {
    props:{
        ordersPendingReview:Object,
        newvendors: Object,
        newcustomers: Object,
        recentPayments: Object,
    },
    data() {
        return {
            resultsLimit:5,
            showModal: false
        }
    },
    components:{
        AppLayout, Link, Search, FormInputGroup, FormButton, RemoveIconButton
    },
    computed:{
        transactions() {
            return this.recentPayments.pay.data.slice(0, this.resultsLimit)
        },
        totalAmount() {
            var itemsTotal = 0;
            var subitems = this.recentPayments.pay.data;
            var subItemsTotal = 0;
            for (var key in subitems) {
                var subitem = subitems[key];
                subItemsTotal = subItemsTotal + subitem.Amount;
            }
            itemsTotal += subItemsTotal;
            return itemsTotal;
        },
		...mapGetters({
			cartItems: "cart/getCartItems",
			totalItems: "cart/getTotalItem",
			totalPrice: "cart/getTotalPrice",
			totalDiscount: "cart/getTotalDiscount",
			grandTotal: "cart/getGrandTotal",
		}),
		orderItems() {
			return this.cartItems.map((item) => {
				return {
					book_id: item.id,
					quantity: item.quantity,
				};
			});
		},
	},
    methods: {
        toggleModal(id){
            this.showModal = id;
        },
        closeModal() {
            this.showModal = false;
        },
        roundFormat: function (value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(decimals);
        },
        currencyFormat: function (value, decimals, symbol='KES ') {
            return symbol + this.roundFormat(value,2);
        },
        ...mapMutations({
			cartItemQuantity: "cart/CART_ITEM_QUANTITY",
		}),

		removeFromCart(item) {
			store.dispatch("cart/removeFromCart", item);
		},

		changedQuantity(value, item) {
			this.cartItemQuantity({
				item,
				val: value,
			});
		},
        currencyFormat2(value) {
            return "Kes " + new Intl.NumberFormat('en-US').format(Math.round(value));
        },
		async updateOrder(theOrder) {
            this.loading = true;
            this.showModal = false;
			try {
                await axios.get('/sanctum/csrf-cookie')
                .then((res) => {
                    if(res) {
                        axios.post(route('orders.update', theOrder), {
                            customer_id: this.$page.props.user.id,
                            totalDiscount: 0,
                            order: theOrder,
                            orderItems: this.orderItems,
                        })
						.then((response) => {
							if(response) {
								
								Swal.fire({
									title: 'Order updated successfully!',
									timer: 2000,
									icon: 'success',
									timerProgressBar: true,
									showConfirmButton: false,
								});
								store.dispatch("cart/resetCart");
                                window.location.reload();
								//localStorage.setItem('OrderId', JSON.stringify(response.data));
								//window.location.href = route('myorders');
								this.loading = false;
							}
						});
                        
                    }
                })
			} catch (error) {
				console.log(error);
			}
		},
        
    },
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
                                <span>Paid Amount</span>
                            </div>
                            <div class="text-3xl">{{currencyFormat(totalAmount)}}</div>
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
                <div class="grid grid-cols-2 filament-widgets-container gap-4 lg:gap-8 mb-6">
                    
                    <div class="border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container">
                        <div class="px-2 pt-2">
                            <div class="filament-tables-header px-4 py-2 mb-2">
                                <div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2">
                                    <h2 class="filament-tables-header-heading text-xl font-bold tracking-tight">Orders Pending Review</h2>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full">
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
                                                    <div class="px-4 py-3"> 
                                                        <span v-on:click="toggleModal(index)" class="cursor-pointer hover:text-green-500 border py-2 px-3 rounded-full border-slate-300 hover:border-green-500">Approve</span>
                                                        <div v-if="showModal === index" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                                            <div class="relative w-auto my-6 mx-auto max-w-7xl">
                                                                <!--content-->
                                                                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                <!--header-->
                                                                <div class="flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                                                                    <h3 class="text-3xl font-semibold">
                                                                    Approving order {{item.invoice_no}}
                                                                    </h3>
                                                                    <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                                                                    <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                        ×
                                                                    </span>
                                                                    </button>
                                                                </div>
                                                                <!--body-->
                                                                <div class="relative p-6 flex-auto px-5">
                                                                    <div class="flex w-100">
                                                                        <div class="row">
                                                                                <div class="col-sm-12 mb-4">
                                                                                    <h4>Order Items</h4>
                                                                                    <table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm">
                                                                                        <thead>
                                                                                            <tr class="bg-green-600">
                                                                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-white cursor-default">Item </span></td>
                                                                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-white cursor-default">Quantity </span></td>
                                                                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-white cursor-default">Level/Class </span></td>
                                                                                                
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="divide-y whitespace-nowrap">
                                                                                            <tr v-for="product in item.order_items" :key="product.id" class="filament-tables-row transition">
                                                                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{ product.product }}</div></td>
                                                                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{ product.quantity }}</div></td>
                                                                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.class}}/ {{ item.level }}</div></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                                <div class="col-sm-12 mb-4">
                                                                                    <Search />
                                                                                </div>
                                                                                <div class="col-sm-12 mb-4">
                                                                                    <h4>Cart Items</h4>
                                                                                    <div class="w-100">
					<!-- cart item -->
					<div class="rounded-primary overflow-hidden" v-if="cartItems.length">
						<div class="overflow-x-auto overflow-y-hidden w-full">
							<table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto">
								<thead>
									<tr class="bg-primary-600">
										<th class="text-white">Book</th>
										<th class="text-white">Name</th>
										<th class="text-white">Price</th>
										<th class="text-white">Quantity</th>
										<!-- <th class="text-white">Total</th> -->
										<th class="text-white"></th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200 pb-3">
									<tr v-for="(item, index) in cartItems" :key="index">
										<td class="px-3">
											<div class="h-16 w-16">
												<img :src="item.featured_image" class="w-full h-full object-cover py-2" :alt="item.name">
											</div>
										</td>
										<td class="px-3 text-sm"> {{item.name}} </td>
										<td class="px-3"><span class="text-orange-700 inline-flex text-center rounded-full text-sm">pending quotation</span></td>
										<td class="px-3">
											<input @input="changedQuantity($event, item)" :value="item.quantity" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 py-2"/>
										</td>
										<!-- <td class="px-3"><span class="font-semibold">
											<span>pending quotation</span>
												<span v-if="item.saleprice > '0'">{{currencyFormat(item.quantity * item.saleprice)}}</span>
												<span v-else>{{currencyFormat(item.quantity * item.price)}}</span>
											</span> </td> -->
										<td class="px-3">
											<remove-icon-button @click="removeFromCart(item)"></remove-icon-button>
										</td>
									</tr>
								</tbody>
								<tfoot>

								</tfoot>
							</table>
						</div>
						
					</div>
					<!-- if no cart items -->
					<div v-else>
						<div class="flex flex-col items-center justify-center text-gray-300 h-44 bg-gray-50 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
								<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
								<path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
							</svg>
							<p class="mt-2 text-gray-400">Your Book List is Empty!</p>
						</div>
					</div>
				</div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--footer-->
                                                                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                    <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                                                    Close
                                                                    </button>
                                                                    <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="updateOrder(item.id)">
                                                                    Update Order
                                                                    </button>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="showModal === index" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                    <div class="border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container">
                        <div class="px-2 pt-2">
                            <div class="filament-tables-header px-4 py-2 mb-2">
                                <div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2">
                                    <h2 class="filament-tables-header-heading text-xl font-bold tracking-tight">Recent Payments</h2>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full">
                            <div class="filament-tables-table-container overflow-x-auto relative border-t">
                                    <table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm">
                                        <thead>
                                            <tr class="bg-teal-100">
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Id</span></td>
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Transaction #</span></td>
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Amount</span></td>
                                                <td class="filament-tables-header-cell p-0"><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default">Phone</span></td>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y whitespace-nowrap">
                                            <tr class="filament-tables-row transition" v-for="(item, index) in transactions" :key="index">
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{index + 1}}</div></td>
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.MpesaReceiptNumber}}</div></td>
                                                <td class="filament-tables-cell"><div class="px-4 py-3">{{item.Amount}}</div></td>
                                                <td class="filament-tables-cell">
                                                    <div class="px-4 py-3"> {{item.PhoneNumber}}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="w-full py-3 flex justify-center">
                                        <Link :href="route('admin.view.payment')" class="text-center">view all transactions</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
 

    </AppLayout>
</template>
<style lang="scss" scoped>
.disabled {
	pointer-events: none;
	opacity: 0.6;
}
table thead th {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
}
</style>
