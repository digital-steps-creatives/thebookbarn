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
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueCameraLib from 'vue-camera-lib'

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
            .use(store)
            .use(VueSweetalert2, options)
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
