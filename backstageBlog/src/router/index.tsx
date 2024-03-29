import { Navigate } from 'react-router-dom'
import React, { lazy, LazyExoticComponent, ReactNode, Suspense } from 'react'
import Router from '../typing/router'
import { Spin } from 'antd'
import WithAuth from '../component/Auth'

const Module = (children: ReactNode) :ReactNode => {
	return <Suspense fallback={
		<div style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Spin tip="Loading..."></Spin>
		</div>
	}>
		{children}
	</Suspense>
}
const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const HomePage = lazy(() => import('../pages/HomePage'))
const Article = lazy(() => import('../pages/Article'))
const Dynamic = lazy(() => import('../pages/Dynamic'))
const ArticleEdit = lazy(() => import('../pages/ArticleEdit'))
const DynamicEdit = lazy(() => import('../pages/DynamicEdit'))
const Category = lazy(() => import('../pages/Category'))
const Label = lazy(() => import('../pages/Label'))

const routes: Array<Router> = [
	{
		name: '登录',
		path: '/login',
		element: Module(<Login/>),
	},
	{
		name: '主页',
		path: '/',
		element: Module(<WithAuth>{<Home/>}</WithAuth>),
		children: [
			{
				name: '主页',
				path: '/',
				element: Module(<HomePage/>),
			},
			{
				name: '写文章',
				path: '/write-article',
				element: Module(<Article/>),
			},
			{
				name: '写动态',
				path: '/write-dynamic',
				element: Module(<Dynamic/>),
			},
			{
				name: '文章管理',
				path: '/edit-article',
				element: Module(<ArticleEdit/>),
			},
			{
				name: '编辑文章',
				path: '/edit/:id',
				element: Module(<Article key={'/edit'}/>),
			},
			{
				name: '动态管理',
				path: '/edit-dynamic',
				element: Module(<DynamicEdit/>),
			},
			{
				name: '分类管理',
				path: '/edit-category',
				element: Module(<Category/>),
			},
			{
				name: '标签管理',
				path: '/edit-label',
				element: Module(<Label/>),
			},
		],
	},
]

export default routes
