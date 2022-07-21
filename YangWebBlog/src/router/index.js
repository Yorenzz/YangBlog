import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path:'/home',
        name:'首页',
        component:()=>import('../components/MiddleArticle.vue')
    },
    {
        path:'/blog',
        name:'博客正文',
        component:()=>import('../components/BlogDetail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router