import {Button,Input,Image,message} from "antd";
import {UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import login from './index.module.css'
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {loginIn, testaaa} from "../../api";
import {useLocation} from "react-router";
import {useAuth} from "../../context/TokenContext";
import {getToken} from "../../utils/routeValidate";
function Index() {
    let auth = useAuth()
    let location = useLocation()
    const navigate = useNavigate()
    let localToken=getToken()
    useEffect(()=>{
        if ((auth.token===localToken)&&localToken!==null&&auth.token!==null){
            //已登录
            navigate('/admin/home')
        }
    },[])
    const [username,setUsername]=useState('yang')
    const [password,setPassword]=useState('123456')
    let from = location.state?.from?.pathname || '/admin/home'
    const errorTest = (reason) => {
        message.error('登录失败，'+reason)
    };
    const handleSubmit=()=>{
        let message={username,password}
        loginIn(message).then(response=>{
            console.log('loginSuccess',response.data)
            if(response.data.errno===-1)
                errorTest(response.data.msg)
            else
                auth.signin(response.data['jwt'], () => {
                    navigate(from, { replace: true })
                })
        }).catch(reason=>{
            errorTest(reason)
        })
    }

    function test(){
        let message={username,password}
        testaaa(message).then(response=>{
            console.log(response.data)
        })
    }

    return (
        <div className={login.whole}>
            <div className={login.image}>
                <Image width={200} height={200} preview={false} src='/src/public/Y2.png'/>
            </div>
            <div className={login.container}>
                <div className={login.inputContain}>
                    <Input size="large" value={username} onChange={e=>setUsername(e.target.value)} prefix={<UserOutlined />} placeholder='用户名'/>
                    <Input.Password size="large" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} value={password} onChange={e=>setPassword(e.target.value)} prefix={<LockOutlined />} placeholder='密码'/>
                </div>
                <div className={login.buttonContain}>

                    <Button type="primary" onClick={handleSubmit}>
                        登录
                        {/*<Link to="/admin" className={login.linkItem}>登录</Link>*/}
                    </Button>
                    <Button type='primary' onClick={test}>test</Button>
                </div>
            </div>
        </div>

    )
}
export default Index
