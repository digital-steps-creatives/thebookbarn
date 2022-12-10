<template>
    <div class="relative">
        <input v-model="query" type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 py-3" placeholder="search over 100s products">
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
             </svg>
        </button>        
      <ul v-if="results.length > 0 && query" class="absolute bg-gray-100 p-4 w-full rounded-r-lg rounded-l-lg" style="z-index: 100;height: 350px;overflow-y: scroll;padding-bottom: 2rem;">
        <li v-for="result in results.slice(0,10)" :key="result.id" class="border-b mb-2 pb-2">
          <a :href="result.url" class="flex justify-between text-decoration-none">
            <img :src="result.searchable.featured_image" :alt="result.title" class="w-14 rounded mr-4">
            <div v-text="result.title" class="text-green-700 font-normal text-sm text-left text-decoration-none mt-2"></div>
            <button @click="addToCart(result.searchable)" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </button>
          </a>
        </li>
      </ul>
    </div>
</template>
<script>
import store from '@/store';
  export default {
    data() {
        return {
            query: null,
            results: []
        };
    },
    watch: {
        query(after, before) {
            this.searchProducts();
        }
    },
    methods: {
        searchProducts() {
            axios.get(route('products.search'), { params: { query: this.query } })
            .then(response => this.results = response.data)
            .catch(error => {});
        },
        addToCart(bookItem) {
		    store.dispatch("cart/addToCart", bookItem);
	    }
    }
  }
</script>