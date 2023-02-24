import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("./views/Home.vue")
        },
        {
            path:'/blog',
            name: 'blog',
            component: () => import("./views/Blog.vue"),
            children: []
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('./views/admin/Account.vue')
        },
        {
            path: '/account/login',
            name: 'login',
            component: () => import('./views/admin/LogIn.vue')
        },
        {
            path: '/blog/:id',
            name: 'article',
            component: () => import('./views/Article.vue'),
            props: true
        }
    ]
})


export default router;