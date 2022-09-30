import './style.scss'
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
  
  const { Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
  ): MenuItem {
	return {
	  key,
	  icon,
	  children,
	  label,
	} as MenuItem;
  }
  
  const items: MenuItem[] = [
	getItem('Option 1', '1', <PieChartOutlined />),
	getItem('Option 2', '2', <DesktopOutlined />),
	getItem('User', 'sub1', <UserOutlined />, [
	  getItem('Tom', '3'),
	  getItem('Bill', '4'),
	  getItem('Alex', '5'),
	]),
	getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
	getItem('Files', '9', <FileOutlined />),
  ];
  
  const Home: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
  
	return (
	  <Layout style={{ minHeight: '100vh' }}>
		<Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
		  <div className="logo" />
		  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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