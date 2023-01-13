import Alpine from 'alpinejs'
import AlpineFloatingUI from '@awcodes/alpine-floating-ui'
import NotificationsAlpinePlugin from '../../vendor/filament/notifications/dist/module.esm'
import {createApp} from 'vue/dist/vue.esm-bundler';

Alpine.plugin(AlpineFloatingUI)
Alpine.plugin(NotificationsAlpinePlugin)

window.Alpine = Alpine

Alpine.start()
const app = createApp({
    mounted() {
       console.log('The app is working')
    }
 });
app.mount('#application');