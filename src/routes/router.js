import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Graduate from '@/view/Graduate'
import NewRegister from '@/view/NewRegister'

const routes = [
    {
        path: '/',
        component: Graduate
    },

    {
        path: '/Novo-Cadastro',
        component: NewRegister
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;