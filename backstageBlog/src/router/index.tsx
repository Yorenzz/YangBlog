import {Navigate} from 'react-router-dom'
import {lazy, LazyExoticComponent} from 'react'
import Router from '../typing/router'

const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))
const HomePage = lazy(()=>import('../pages/HomePage'))

const routes: Array<Router> = [
    {
        name: '登录',
        path: '/login',
        element: <Login/>
    },
    {
        name: '主页',
        path: '/',
        element: <Home/>,
        children: [
            {
                name: '主页',
                path: '/homepage',
                element: <HomePage/>,
            }
        ]
    }
]

export default routes