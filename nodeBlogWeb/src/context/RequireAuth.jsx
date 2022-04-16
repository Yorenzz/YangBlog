import React from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import { useAuth } from './TokenContext'
import {getToken, logout} from "../utils/routeValidate";
import {verify} from "../api";
import {message} from "antd"; // 引入验证上下文

export default function RequireAuth({ children }) {
    let auth = useAuth() // 获取验证对象
    const navigate = useNavigate()
    let location = useLocation() // 获取URL参数
    let localToken=getToken()
    //console.log('ver',localToken)
    if (!(auth.token===localToken)||(auth.token===null&&localToken===null)) {
        // 未登入，使用Navigate组件重定向到登录页，传入state属性以保存当前URL位置信息
        return <Navigate to='/' state={{ from: location }} replace />
    }
    if(localToken!==null){
        verify().then(response=>{
            //console.log('res',response)
        }).catch(
            rea=>{
                //console.log('err',rea)
                if (rea.response.status === 401){
                    //console.log('Token已失效，请重新登录')
                    message.error('Token已失效，请重新登录').then(r => {
                        logout()
                        navigate('/', { replace: true })
                    }, err=>console.log(err))
                }
            })
    }
    // console.log('authtoken',auth.token)
    if(auth.token===localToken&&(auth.token!==null&&localToken!==null))
        return children
     // 验证通过，返回插槽内容，例如： ProtectedPage 页面(显示页面)
}
