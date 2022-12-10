<template>
     <Head title="Cart" />
	<FrontLayout>
		<div class="container mx-auto my-5">
			<div class="lg:flex">
				<div class="lg:w-9/12 lg:mr-5">
					<h5 class="font-semibold text-xl mb-3">Booklist Items</h5>
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
											<input @input="changedQuantity($event, item)" :value="item.quantity" type="number"/>
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
				<div class="md:w-6/12 lg:w-3/12 mt-10 lg:mt-0"  v-if="cartItems.length">
					<h5 class="font-semibold text-xl mb-3">Cart Details</h5>

					<div class="bg-gray-200 p-4 rounded-primary">
						<p class="flex justify-between py-2 text-sm">
							<span class="font-medium">
								Sub Total:
							</span>
							<span class="font-bold">
								request quotation first
							</span>
						</p>
						<p class="flex justify-between py-2 text-sm border-b border-gray-300">
							<span class="font-medium">
								Discount:
							</span>
							<span class="font-bold">
								request quotation first
							</span>
						</p>
						<p class="flex justify-between py-2 text-sm">
							<span class="font-medium">
								Cart Total:
							</span>
							<span class="font-bold">
								request quotation first
							</span>
						</p>
					</div>
					<button class="w-full mt-8 text-sm bg-primary text-white px-6 py-3 block rounded-md text-center" @click.prevent="placeOrder" v-if="$page.props.user">
						<div class="spinner-border" role="status" v-if="loading">
							<span class="visually-hidden">Please wait, Loading...</span>
						</div>
						<span v-else>Get a Quotation now</span>	
					</button>
					<div v-else>
                        <Link class="w-full mt-8 text-sm bg-primary text-white px-6 py-3 block rounded-md text-center text-decoration-none" :href="route('login')"  v-if="cartItems.length">Login to get a quotation</Link>
                        <span class="my-5 block text-center font-medium text-lg">or</span>
                        <Link class="w-full mt-8 text-sm bg-redish text-white px-6 py-3 block rounded-md text-center text-decoration-none" :href="route('register')"  v-if="cartItems.length">Sign up to get a quotation</Link>
                    </div>
				</div>
			</div>
		</div>
	</FrontLayout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FrontLayout from '@/Layouts/FrontLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import FormInputGroup from '@/frontend/components/form/InputGroup.vue';
import FormButton from '@/frontend/components/form/Button.vue';
import RemoveIconButton from "@/frontend/components/shared/RemoveIconButton.vue";
import store from '@/store';

export default {
	computed: {
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
    components:{
        FrontLayout, Head, Link, FormInputGroup, FormButton, RemoveIconButton
    },
	data() {
		return {
			coupon:{
				type:null,
				coupon_code:null,
				coupon_amount:null,
				coupon_expiry:null,
				status:null
			},
			loading:false
		}
	},
	methods: {
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
        currencyFormat(value) {
            return "Kes " + new Intl.NumberFormat('en-US').format(Math.round(value));
        },
		async placeOrder() {
            this.loading = true;
			try {
                await axios.get('/sanctum/csrf-cookie')
                .then((res) => {
                    if(res) {
                        axios.post(route('orders.store'), {
                            customer_id: this.$page.props.user.id,
                            totalDiscount: 0,
                            orderItems: this.orderItems,
                        })
						.then((response) => {
							if(response.data.status===200) {
								
								Swal.fire({
									title: 'Order created successfully!',
									timer: 2000,
									icon: 'success',
									timerProgressBar: true,
									showConfirmButton: false,
								});
								store.dispatch("cart/resetCart");
								//localStorage.setItem('OrderId', JSON.stringify(response.data));
								window.location.href = route('myorders');
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
};
</script>


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
