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
            <Hero class="my-5"></Hero>
            <section class="bg-white py-4" style="border-bottom:1px solid #ccc">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="mb-3">Available Books</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="bookItem in listavailablebooks" :key="bookItem.id" class="col-sm-3">
                            <div class="mb-6">
                                <figure>
                                <div class="h-48 overflow-hidden rounded-md mb-2">
                                    <img :src="bookItem.featured_image" :alt="bookItem.name" class=" w-full">
                                </div>
                                <figcaption class="mb-4">
                                    <h4 class="font-semibold text-sm text-gray-600">{{bookItem.name}}</h4>
                                    <h5 class="my-2 text-sm">Level: <span class="bg-orange-500 px-2 py-1 rounded-full text-xs text-white" v-if="bookItem?.classlevel?.level ==='primary'">{{bookItem?.classlevel?.level}}</span> <span class="bg-cyan-600 p-2 rounded-full text-xs text-white" v-else>{{bookItem?.classlevel?.level}}</span> | Class: {{bookItem?.classlevel?.class}}</h5>
                                    <h6 class="font-normal text-sm text-gray-400 mb-3">Subject: {{bookItem?.subject?.name}}</h6>
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
            <section class="py-14 bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
                            <span class="fs-5 text-warning ls-md text-uppercase
                                    fw-semi-bold">new way of doing business

                            </span>
                        <!-- heading  -->
                                <h2 class="display-3 mt-4 mb-3 text-white fw-bold">Are you a Bookshop or Book Vendor?</h2>
                            <!-- para  -->
                            <p class="lead text-white-50 px-lg-8 mb-6">Interested in Ready Customers and Quotations?</p>
                            <Link :href="route('register.vendor')" class="btn btn-primary btn-lg text-white">Get Started now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    </template>
    