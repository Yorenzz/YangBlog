import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('../components/blog/MiddleArticle.vue'),
  },
  {
    path: '/category/:category',
    name: '分类',
    component: () => import('../components/blog/MiddleArticle.vue'),
  },
  {
    path: '/tag/:tag',
    name: '标签',
    component: () => import('../components/blog/MiddleArticle.vue'),
  },
  {
    path: '/blog',
    name: '博客正文',
    component: () => import('../components/blog/BlogDetail.vue'),
  },
  {
    path: '/timeaxis',
    name: '时间轴',
    component: () => import('../components/TimeAxis.vue'),
  },
  {
    path: '/dynamic',
    name: '动态',
    component: () => import('../components/Dynamic.vue'),
  },
  {
    path: '/about',
    name: '关于我',
    component: () => import('../components/About.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../components/common/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
