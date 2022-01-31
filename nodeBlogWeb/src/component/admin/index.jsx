import React, {useState} from "react";
import {Button, Menu, PageHeader} from "antd";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getToken, logout} from "../../utils/routeValidate";
import {useNavigate} from "react-router";
import Layout, {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
const { SubMenu } = Menu;
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined, PieChartOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import './admin.css'


function Admin() {
    const location=useLocation()
    const navigateTo=useNavigate()
    const [collapsed,setCollapsed]=useState(false)
    function test(){
        logout().then(location.state=null)
        console.log('clearSuc')
        console.log(location.state)
    }
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    const test2=()=>{
        navigateTo('/admin/article',{state:getToken()})
    }
    const test3=()=>{
        navigateTo('/admin',{state:getToken()})
    }
    if(location.state&&getToken())
    return (
        <div style={{height:'100%'}}>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<PieChartOutlined />} onClick={test3}>
                            首页
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="博客编辑">
                            <Menu.Item key="index1" icon={<UserOutlined />} onClick={test2}>
                                写文章
                            </Menu.Item>
                            <Menu.Item key="index2" icon={<VideoCameraOutlined />}>
                                写动态
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined />} title="博客管理">
                            <Menu.Item key="index3" icon={<UserOutlined />}>
                                文章管理
                            </Menu.Item>
                            <Menu.Item key="index4" icon={<VideoCameraOutlined />}>
                                动态管理
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: "trigger",
                            onClick: toggle,
                        })}
                        <Button onClick={test}>Logout</Button>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '16px 16px',
                            //padding: 24,
                            height: '100%'
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
    else
        return(
            <Navigate to='/'/>
        )
}

export default Admin
