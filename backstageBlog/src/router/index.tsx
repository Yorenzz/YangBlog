import {Navigate} from 'react-router-dom'
import {lazy, ReactNode} from 'react'

interface Router {
    name?: string,
    path: string,
    children?: Array<Router>,
    element: ReactNode,
}

const lazyLoad=(moduleName: string)=>{
    const Modules = lazy(()=>import(moduleName))
    return <Modules/>
}

const routes: Array<Router> = [
    {
        path: '/login',
        element: lazyLoad('../pages/login/Login')
    }
]

export default routes