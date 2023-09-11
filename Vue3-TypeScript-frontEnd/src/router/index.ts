import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: 'hello',
        path: '/Hello',
        component: () => import("@/components/HelloWorld.vue"),
        meta: {
            title: '测试Hello'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;