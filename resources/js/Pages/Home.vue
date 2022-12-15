<script setup>
    import AppLayout from '@/Layouts/FrontLayout.vue';
    import Welcome from '@/Components/Welcome.vue';
    import Hero from '@/Components/Hero.vue';
    import FeaturedProducts from '@/frontend/components/partials/FeaturedProducts.vue';
    import store from '@/store';
    import Pagination from '@/Components/Pagination.vue';
    import { Head, Link } from '@inertiajs/inertia-vue3';

    defineProps({
        listavailablebooks: Object
    })
    const addToCart = (bookItem) => {
		store.dispatch("cart/addToCart", bookItem);
	}
    </script>
    
    <template>
        <AppLayout title="Home" class="home">
            <Hero></Hero>
            <section class="bg-white py-4" style="border-bottom:1px solid #ccc">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="mb-3">Available Books</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="bookItem in listavailablebooks" :key="bookItem.id" class="col-sm-3 col-6">
                            <div class="mb-6">
                                <figure>
                                <div class="h-48 overflow-hidden rounded-md mb-2">
                                    <img :src="bookItem.featured_image" :alt="bookItem.name" class=" w-full">
                                </div>
                                <figcaption class="mb-4">
                                    <h4 class="font-semibold text-sm text-gray-600">{{bookItem.name}}</h4>
                                    <div v-if="bookItem.product_type==='book'">
                                        <h5 class="my-2 text-sm">Level: <span class="bg-orange-500 px-2 py-1 rounded-full text-xs text-white" v-if="bookItem?.classlevel?.level ==='primary'">{{bookItem?.classlevel?.level}}</span> <span class="bg-cyan-600 p-2 rounded-full text-xs text-white" v-else-if="bookItem.product_type='uniform'">any level</span> | Class: {{bookItem?.classlevel?.class}}</h5>
                                        <h6 class="font-normal text-sm text-gray-400 mb-3">Subject: {{bookItem?.subject?.name}}</h6>
                                    </div>
                                    <div v-else-if="bookItem.product_type==='uniform'">
                                        <h6 class="font-normal text-sm text-gray-400 mb-3">Category: {{bookItem?.category}}</h6>
                                    </div>
                                    
                                    <button @click="addToCart(bookItem)" class="text-white bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-normal rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        Add to your List
                                    </button>
                                </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section class="py-14 bg-green-900">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-8 text-center">
                            <span class="fs-5 text-warning ls-md text-uppercase
                                    fw-semi-bold">new way of doing business

                            </span>
                        <!-- heading  -->
                                <h2 class="display-5 mt-4 mb-3 text-white fw-bold">Are you a Bookshop or Book Vendor?</h2>
                            <!-- para  -->
                            <p class="lead text-white-50 px-lg-8 mb-6">Interested in Ready Business?</p>
                            <Link :href="route('register.vendor')" class="bg-green-500 py-3 px-12 rounded-lg text-white hover:bg-green-700 text-decoration-none">Get started now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-14 bg-black">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-8 text-center">
                            <span class="fs-5 text-warning ls-md text-uppercase
                                    fw-semi-bold">Affiliate Program
                            </span>
                        <!-- heading  -->
                                <h2 class="display-5 mt-4 mb-3 text-white fw-bold">Make more Money from the Refferals</h2>
                            <!-- para  -->
                            <p class="lead text-white-50 px-lg-8 mb-6">Interested? Become a partner</p>
                            <Link :href="route('affiliates.landing')" class="bg-red-500 py-3 px-12 rounded-lg text-white hover:bg-red-700 text-decoration-none">Get started now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray-100 py-9">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <span class="icon inline-flex align-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <span class="text-green-800 font-medium text-md inline-flex leading-10 mt-1">Value for your money</span>
                            </div>
                            <div class="col-sm-4">
                                <span class="icon inline-flex align-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                                    </svg>

                                </span>
                                <span class="text-green-800 font-medium text-md inline-flex leading-10 mt-1">24/7 Support</span>
                            </div>
                            <div class="col-sm-4">
                                <span class="icon inline-flex align-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </span>
                                <span class="text-green-800 font-medium text-md inline-flex leading-10 mt-1">Safe and secure online payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    </template>
    