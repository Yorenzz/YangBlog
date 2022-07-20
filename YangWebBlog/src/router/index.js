import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        name:'首页',
        component:()=>import('../components/MiddleArticle.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router