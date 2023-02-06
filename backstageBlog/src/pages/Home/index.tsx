import './style.scss'
import {
	FormOutlined,
	FileOutlined,
	EditOutlined,
	TagsOutlined,
	MessageOutlined,
	FundOutlined,
	FolderOpenOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import { Button, MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import storage from '../../utils/storage'
import { TOKEN_KEY } from '../../config'
import { getUploadToken } from '../../api'
import { saveUploadToken } from '../../store/features/userInfoSlice'

const { Content, Footer, Sider, Header } = Layout

const items: MenuProps['items'] = [
	{
		label: 'Dashboard',
		key: '/',
		icon: <FundOutlined />,
	},
	{
		label: '博客编辑',
		key: '/write',
		icon: <FormOutlined />,
		children: [
			{
				label: '写文章',
				key: '/write-article',
				icon: <EditOutlined />,
			},
			{
				label: '写动态',
				key: '/write-dynamic',
				icon: <EditOutlined />,
			},
		],
	},
	{
		label: '博客管理',
		key: '/edit',
		icon: <SettingOutlined />,
		children: [
			{
				label: '文章管理',
				key: '/edit-article',
				icon: <FileOutlined />,
			},
			{
				label: '动态管理',
				key: '/edit-dynamic',
				icon: <MessageOutlined />,
			},
			{
				label: '分类管理',
				key: '/edit-category',
				icon: <FolderOpenOutlined />,
			},
			{
				label: '标签管理',
				key: '/edit-label',
				icon: <TagsOutlined />,
			},
		],
	},
]

const Home: React.FC = () => {
	const location = useLocation()
	const dispatch = useAppDispatch()
	const { pathname } = location
	const [collapsed, setCollapsed] = useState(false)
	const [openKey, setOpenKey] = useState([''])
	const navigateTo = useNavigate()
	const handleClick: MenuProps['onClick'] = (e: any) => {
		navigateTo(e.key)
	}
	const handleOpen = (open: string[]):void => {
		setOpenKey(open)
	}
	const exit = () => {
		storage.clearItem(TOKEN_KEY)
		navigateTo('/login')
	}
	useEffect(() => {
		// const key = pathname.slice(0, pathname.indexOf('-'))
		setOpenKey(['', '/write', '/edit'])
	}, [])

	useEffect(() => {
		getUploadToken().then((res) => {
			dispatch(saveUploadToken(res))
		})
	}, [])

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
				}}
				collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
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
			<Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
				<Header className="header">
					<Button onClick={exit}>退出登录</Button>
				</Header>
				<Content style={{ margin: '16px 16px' }}>
					<div className="site-layout-background" style={{
						padding: 24,
						minHeight: '100%',
					}}>
						<Outlet></Outlet>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Yorenz's BLog Backstage</Footer>
			</Layout>
		</Layout>
	)
}


export default Home
