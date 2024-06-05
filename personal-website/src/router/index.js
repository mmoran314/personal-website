import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue';
import TheAbout from '@/components/views/TheAbout.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/hello', component: HelloWorld },
    { path: '/about', component: TheAbout }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;