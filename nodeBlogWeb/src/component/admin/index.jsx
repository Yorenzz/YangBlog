import React, {useContext, useState} from "react";
import {Button, Menu, PageHeader} from "antd";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getToken, logout} from "../../utils/routeValidate";
import {useNavigate} from "react-router";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
const { SubMenu } = Menu;
import {
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, PieChartOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import './admin.css'
// import {fakeAuthProvider as auth} from "../../context/fakeAuth";


function Admin() {
    const navigateTo=useNavigate()
    const urlParams = new URL(window.location.href);
    const pathname = urlParams?.pathname;
    let openKeys= ['/' + pathname.split('/')[1]]
    console.log("pathname:", pathname,openKeys);
    const [collapsed,setCollapsed]=useState(false)
    function test(){
        logout()
        auth.signout(() => {
            navigateTo('/')
        })
    }
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    const test2=()=>{
        navigateTo('/admin/article')
    }
    const test3=()=>{
        navigateTo('/admin/home')
    }
    const test4=()=>{
        navigateTo('/admin/dynamic')
    }
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" selectedKeys={[pathname]} defaultOpenKeys={['1','2']}>
                        <Menu.Item key="/admin/home" icon={<PieChartOutlined />} onClick={()=>{navigateTo('/admin/home')}}>
                            首页
                        </Menu.Item>
                        <SubMenu key="1" icon={<UserOutlined />} title="博客编辑">
                            <Menu.Item key="/admin/article" icon={<UserOutlined />} onClick={()=>{navigateTo('/admin/article')}}>
                                写文章
                            </Menu.Item>
                            <Menu.Item key="/admin/dynamic" icon={<VideoCameraOutlined />} onClick={()=>{navigateTo('/admin/dynamic')}}>
                                写动态
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="2" icon={<UserOutlined />} title="博客管理">
                            <Menu.Item key="/admin/articleEdit" icon={<UserOutlined />} onClick={()=>{navigateTo('/admin/articleEdit')}}>
                                文章管理
                            </Menu.Item>
                            <Menu.Item key="/admin/dynamicEdit" icon={<VideoCameraOutlined />} onClick={()=>{navigateTo('/admin/dynamicEdit')}}>
                                动态管理
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '16px 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24 }}>
                            <Outlet/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>

    )
}
export default Admin
