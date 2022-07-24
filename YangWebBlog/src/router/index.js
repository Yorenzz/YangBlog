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
    },
    {
        path: '/category',
        name: '分类',
        redirect: '/category/study',
        children: [
            {path: '/category/study',name:'学习笔记',component:()=>import('../components/category/Study.vue')},
            {path: '/category/project',name:'个人项目',component:()=>import('../components/category/Project.vue')},
            {path: '/category/technology',name:'技术杂烩',component:()=>import('../components/category/Technology.vue')},
            {path: '/category/notes',name:'心情随写',component:()=>import('../components/category/Notes.vue')}
        ]
    },
    {
        path:'/timeaxis',
        name:'时间轴',
        component:()=>import('../components/TimeAxis.vue')
    },
    {
        path:'/dynamic',
        name:'动态',
        component:()=>import('../components/Dynamic.vue')
    },
    {
        path:'/about',
        name:'关于我',
        component:()=>import('../components/About.vue')
    },
    {
        path: '/404',
        name: '404',
        component: ()=>import('../components/404.vue')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router