<template>
    <div v-show="links.length > 3">
      <div class="flex flex-wrap -mb-1">
        <template v-for="(link, key) in links" :key="key">
          <div v-if="link.url === null" :key="`${key}-disabled`" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" v-html="link.label"/>
          <Link v-else :key="key" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-primary-700 hover:text-white focus:border-indigo-500 focus:text-indigo-500 text-decoration-none" :class="{ 'bg-primary text-white': link.active }" :href="link.url">
            <span v-html="link.label"></span>
          </Link>
        </template>
      </div>
    </div>
  </template>

  <script>
    import { Head, Link } from '@inertiajs/inertia-vue3';
  export default {
    props: {
      links: Array,
    },
    components:{
        Head, Link
    }
  }
  </script>
