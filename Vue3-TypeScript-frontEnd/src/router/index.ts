import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        name: 'hello',
        path: '/Hello',
        component: () => import("@/components/HelloWorld.vue"),
        meta: {
            title: '测试Hello'
        }
    },
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;