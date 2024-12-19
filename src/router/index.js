import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import InputForm from '../components/InputForm.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/input-form',
        name: 'InputForm',
        component: InputForm,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
