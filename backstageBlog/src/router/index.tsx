import {Navigate} from 'react-router-dom'
import {lazy, LazyExoticComponent} from 'react'
import Router from '../interface/router'

const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))

const routes: Array<Router> = [
    {
        name: '登录',
        path: '/login',
        element: <Login/>
    },
    {
        name: '主页',
        path: '/',
        element: <Navigate to="/home"></Navigate>,
        children: [
            {
                name: '主页',
                path: '/home',
                element: <Home/>
            }
        ]
    }
]

export default routes