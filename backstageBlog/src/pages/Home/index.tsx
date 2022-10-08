import './style.scss'
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
	{
		label: 'Dashboard',
		key: '/',
		icon: <MailOutlined />,
	},
	{
		label: '博客编辑',
		key: '/write',
		icon: <SettingOutlined />,
		children: [
			{
				label: '写文章',
				key: '/write-article',
				icon: <MailOutlined />,
			},
			{
				label: '写动态',
				key: '/write-dynamic',
				icon: <MailOutlined />,
			},
		]
	},
	{
		label: '博客管理',
		key: '/edit',
		icon: <SettingOutlined />,
		children: [
			{
				label: '文章管理',
				key: '/edit-article',
				icon: <MailOutlined />,
			},
			{
				label: '动态管理',
				key: '/edit-dynamic',
				icon: <MailOutlined />,
			},
		]
	}
];

const Home: React.FC = () => {
	const location = useLocation()
	const { pathname } = location
	const [collapsed, setCollapsed] = useState(false);
	const [openKey, setOpenKey] = useState([''])
	const navigateTo=useNavigate()
	const handleClick: MenuProps['onClick'] = (e: any)=>{
		navigateTo(e.key)
	}
	const handleOpen=(open: string[]):void=>{
		setOpenKey(open)
	}
	useEffect(()=>{
		const key = pathname.slice(0,pathname.indexOf('-'))
		setOpenKey([key])
	}, [])
	return (
	  <Layout style={{ minHeight: '100vh' }}>
		<Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
		  <div className="logo" />
		  <Menu
			  theme="dark"
			  mode="inline"
			  defaultSelectedKeys={[pathname]}
			  items={items}
			  defaultOpenKeys={openKey}
			  openKeys={openKey}
			  onOpenChange={handleOpen}
			  onClick={handleClick}
		  />
		</Sider>
		<Layout className="site-layout">
		  <Content style={{ margin: '16px 16px' }}>
			<div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
			  <Outlet></Outlet>
			</div>
		  </Content>
		  <Footer style={{ textAlign: 'center' }}>Yorenz's BLog Backstage</Footer>
		</Layout>
	  </Layout>
	);
};



export default Home
