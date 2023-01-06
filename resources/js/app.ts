import './bootstrap';
import '../css/app.css';

import Vue, {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
// @ts-ignore
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import "flowbite";
import 'tw-elements';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // @ts-ignore
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    // @ts-ignore
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            // @ts-ignore
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({color: '#4B5563'});

