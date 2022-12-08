import './bootstrap';
import '../css/app.css';
import '../css/bookbarn.css';
import '../sass/app.scss';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import * as bootstrap from 'bootstrap';
import store from '@/store';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueCameraLib from 'vue-camera-lib';
import { plugin as formPlugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const options = {
    confirmButtonColor: '#35B520',
    cancelButtonColor: '#f00303',
};
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(formPlugin, defaultConfig({
                config: {
                    classes: generateClasses({
                      text: {
                        outer: 'mb-3',
                        label: 'block mb-1 font-bold text-sm',
                        inner: 'w-full',
                        input: 'w-full h-10 px-3 border-gray-300 shadow-sm rounded-md text-base text-gray-700 placeholder-gray-400',
                        help: 'text-xs text-gray-500',
                        messages: 'list-none p-0 mt-1 mb-0',
                        message: 'text-red-500 mb-1 text-xs'
                      },
                      select: {
                        outer: 'mb-3',
                        label: 'block mb-1 font-bold text-sm',
                        inner: 'w-full',
                        input: 'w-full h-10 px-3 border-gray-300 shadow-sm rounded-md text-base text-gray-700 placeholder-gray-400',
                        help: 'text-xs text-gray-500',
                        messages: 'list-none p-0 mt-1 mb-0',
                        message: 'text-red-500 mb-1 text-xs'
                      }
                    })
                  }
            }))
            .use(store)
            .use(ZiggyVue, Ziggy)
            .use(VueCameraLib)
            .mount(el);
    },
});

InertiaProgress.init({
    // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: true,
})
