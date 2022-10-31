<template>
	<div class="flex items-center h-full px-4 lg:px-6">
		<dropdown width="72" class="hidden md:flex">
			<template #trigger>
				<div class="cursor-pointer border p-3 rounded-lg inline-flex">
					<CartIcon class="relative" />
					<div v-if="cartItems && cartItems.length" class="absolute -top-2.5 -right-2.5 bg-primary-500 h-5 w-5 rounded-full flex items-center justify-center">
						<span class="inline-block mb-0 text-xs text-white whitespace-nowrap">{{totalItems}}</span>
					</div>
				</div>
			</template>

			<template #content={close}>
				<div class="bg-white">
					<div v-if="cartItems && cartItems.length">
						<!-- header -->
						<div class="bg-primary text-white py-2 px-3">
							<p class="text-center text-sm tracking-wider">{{totalItems}} Books Added to your BookList</p>
						</div>

						<!-- body -->
						<div class="overflow-y-auto" style="height: 295px;">
							<!-- cart items -->
							<div class="p-3 border-b border-gray-100" v-for="(item, index) in cartItems" :key="index">
								<div class="flex items-center justify-between">
									<div class="flex">
										<div class="h-16 w-16 border rounded-lg overflow-hidden">
											<img :src="item.featured_image" class="w-full h-full object-cover" :alt="item.name" />
										</div>
										<div class="ml-3 mt-2 text-sm">
											<h6 class="block font-semibold">{{item.name}}</h6>
											<span>Price: <span>not available</span><span v-if="item.saleprice > '0'">{{item.salepriceFormatted}} <span class="ml-2" style="text-decoration:line-through">{{item.priceFormatted}}</span> </span><span v-else>{{item.priceFormatted}}</span></span>
										</div>
									</div>
									<remove-icon-button @click="removeFromCart(item)"></remove-icon-button>
								</div>

								<!-- items -->
								<div class="flex items-center justify-between font-semibold text-sm mt-4">
									<!-- <div class="w-28">
										<form-input-group :label="item.name" @input="changedQuantity($event, item)" :value="item.quantity"></form-input-group>
									</div> -->
									<!-- <span>Total: <span v-if="item.saleprice > '0'">{{currencyFormat(item.quantity * item.saleprice)}}</span>
												<span v-else>{{currencyFormat(item.quantity * item.price)}}</span></span> -->
												<span>Cost</span>
												<span>awaiting Quotation</span>

								</div>
							</div>
						</div>

						<!-- footer -->
						<div class="py-3 px-4 bg-gray-50">
							<div class="text-right flex items-center justify-between font-semibold text-sm mt-1">
								<span>Total cost</span>
								<span class="text-red-600">Pending Quotation</span>
								<!-- <span>{{currencyFormat(totalPrice)}}</span> -->
							</div>
							<Link :href="route('cart')" class="w-full mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap w-full mt-4">View your Booklist</Link>
						</div>
					</div>

					<div v-else class="py-3 px-4 h-16 flex items-center justify-center">No Books added in the List!</div>
				</div>
			</template>
		</dropdown>

		<!-- cart on mobile nav -->
		<Link :href="route('cart')" class="md:hidden">
			<div class="cursor-pointer relative">
				<CartIcon />
				<div class="absolute -top-2.5 -right-2.5 bg-primary h-5 w-5 rounded-full flex items-center justify-center" v-if="totalItems">
					<span class="inline-block mb-0 text-xs text-white whitespace-nowrap">{{totalItems}}</span>
				</div>
			</div>
		</Link>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Link } from '@inertiajs/inertia-vue3';
import Dropdown from "../shared/Dropdown.vue";
import CartIcon from "../icons/CartIcon.vue";
import FormButton from "../form/Button.vue";

export default {
    components:{
        Dropdown, Link, CartIcon, FormButton
    },
	computed: {
		...mapGetters({
			cartItems: "cart/getCartItems",
			totalItems: "cart/getTotalItem",
			totalPrice: "cart/getTotalPrice",
		}),
	},

	methods: {
        gotoCart(){
            window.location.href = route('cart');
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
        currencyFormat(value) {
            return "Kes " + new Intl.NumberFormat('en-US').format(Math.round(value));
        },
	},
};
</script>

<style lang="scss" scoped>
</style>
