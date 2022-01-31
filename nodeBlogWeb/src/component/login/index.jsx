import {Button,Input,Image} from "antd";
import {UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import login from './index.module.css'
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {loginIn, testaaa} from "../../api";
import {getToken} from "../../utils/routeValidate";

//import Admin from "../admin";

function Index() {
    const navigateTo = useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    function handleSubmit(){
        let message={username,password}
        // message=JSON.stringify(message)
        loginIn(message).then(response=>{
            const token=getToken()
            console.log('loginSuccess',response.data)
            console.log({token})
            navigateTo('/admin', {state:{token}})
        }).catch(err=>{
            console.log(err)
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
