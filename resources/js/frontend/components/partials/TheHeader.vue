<template>
	<header>
		<!-- main nav -->
		<nav class="bg-white fixed w-full px-2 shadow nav z-10 top-0">
			<div class="container mx-auto flex items-center justify-between h-full">
				<!-- logo -->
				<ResponsiveLogo />

				<!-- Nav items -->
				<div class="navigation hidden md:flex items-center h-full md:ml-auto">
					<!-- links -->
                    <NavLink :href="route('shop')" :active="route().current('shop')">
                        Shop
                    </NavLink>
				</div>

				<div class="flex items-center ml-auto md:ml-0">
					<!-- Cart -->
					<cart-dropdown></cart-dropdown>
					<!-- profile -->

                    <div class="hidden sm:flex sm:items-center sm:ml-6" v-if="$page.props.auth.user">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                                Welcome, {{ $page.props.auth.user.name }}

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
										<DropdownLink :href="route('customer.orders')">
                                            My Orders
                                        </DropdownLink>
                                        <DropdownLink :href="route('customer.profile')">
                                            Edit Profile
                                        </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                            </Dropdown>
                        </div>
                    </div>
					<!-- Login button -->
					<Link v-else  :href="route('login')" class="hidden md:inline-block px-4 lg:px-6 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap">Sign In</Link>

				</div>

				<!-- Mobile Nav toggle -->
				<div @click="toggleMobileNav" class="cursor-pointer inline-block md:hidden text-primary-500 ml-4">
					<hamburger-icon></hamburger-icon>
				</div>
			</div>
		</nav>
		<!-- mobile-nav -->
		<transition name="mobile-nav" mode="out-in" appear>
			<sidebar v-if="mobileNav" v-click-outside="hide"></sidebar>
		</transition>
	</header>
</template>

<script>
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/inertia-vue3';
import ClickOutside from "vue-click-outside";
import ResponsiveLogo from '../shared/ResponsiveLogo.vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import CartDropdown from './CartDropdown.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

export default {
	name: "TheHeader",
	data() {
		return {
			mobileNav: false,
			cartItem: true,
            showingNavigationDropdown:false
		};
	},
    components:{
        ResponsiveLogo,
        HamburgerIcon,
        CartDropdown,
        Link,
        NavLink,
ResponsiveNavLink,
Dropdown,
DropdownLink
    },
	methods: {
		toggleMobileNav() {
			this.mobileNav = !this.mobileNav;
		},
		hide() {
			this.mobileNav = false;
		},
	},

	// do not forget this section
	directives: {
		ClickOutside,
	},

	mounted() {
		// prevent click outside event with popupItem.
		this.popupItem = this.$el;
	},
};
</script>

<style lang="scss" scoped>
header {
	z-index: 99;
	box-shadow: 0 0 10px rgb(136 136 136 / 10%);
}

.nav {
	height: 80px;
}

.nav-item {

}

.nav-link {
	transition: all 0.2s ease;
    color:#ba0c2f;
}


.Link-exact-active {

}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
	transition: all 0.3s ease-in-out;
}

.mobile-nav-enter,
.mobile-nav-leave-to {
	transform: translateX(-100%);
}
</style>
