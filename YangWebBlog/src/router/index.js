import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        name:'首页',
        component:()=>import('../views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router