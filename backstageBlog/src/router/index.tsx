import {Navigate} from 'react-router-dom'
import {lazy, LazyExoticComponent} from 'react'
import Router from '../typing/router'

const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))
const HomePage = lazy(()=>import('../pages/HomePage'))
const Article = lazy(()=>import('../pages/Article'))
const Dynamic = lazy(()=>import('../pages/Dynamic'))

const routes: Array<Router> = [
    {
        name: '登录',
        path: '/Login',
        element: <Login/>
    },
    {
        name: '主页',
        path: '/',
        element: <Home/>,
        children: [
            {
                name: '主页',
                path: '/',
                element: <HomePage/>,
            },
            {
                name: '写文章',
                path: '/write-article',
                element: <Article/>
            },
            {
                name: '写动态',
                path: '/write-dynamic',
                element: <Dynamic/>
            }
        ]
    }
]

export default routes
