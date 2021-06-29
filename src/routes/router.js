import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Graduate from '@/view/Graduate'

const routes = [
    {
        path: '/',
        component: Graduate
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;