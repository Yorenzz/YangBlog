import { Button, Popconfirm, Space, Switch, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { ColumnsType } from 'antd/es/table'
import { LabelDataType } from '../../typing/label'
import { ArticleDataType } from '../../typing/article'
import { deleteArticle, getArticleData } from '../../api'
import { useNavigate } from 'react-router-dom'

const ArticleEdit:React.FC = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [deleteLoading, setDeleteLoading] = useState(false)
	const columns: ColumnsType<ArticleDataType> = [
		{
			title: '序号',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: '文章标题',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: '分类',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: '置顶',
			key: 'top',
			render: (_, record) => (
				<Switch defaultChecked={record.top} />
			),
		},
		{
			title: '可见性',
			key: 'private',
			render: (_, record) => (
				<Switch defaultChecked={record.private} />
			),
		},
		{
			title: '创建时间',
			dataIndex: 'time',
			key: 'time',
		},
		{
			title: '最近更新时间',
			dataIndex: 'lastUpdate',
			key: 'lastUpdate',
		},
		{
			title: '操作',
			key: 'operate',
			render: (_, record) => (
				<div>
					<Button onClick={() => navigate(`/edit/${record._id}`)}>编辑</Button>
					<Button onClick={() => deleteText(record._id)}>删除</Button>
				</div>),
		},
	]
	const [articleData, setArticleData] = useState<Array<ArticleDataType>>()

	const deleteText = (id:string) => {
		setDeleteLoading(true)
		deleteArticle(id).then((res) => {
			console.log(res)
			setDeleteLoading((false))
			getArticleTable()
		}).catch(err => {
			console.warn(err)
		})
	}

	const getArticleTable = () => {
		setLoading(true)
		getArticleData('').then((res) => {
			setLoading(false)
			setArticleData(res.map((item:ArticleDataType, index:number) => {
				item.key = index + 1
				return item
			}))
		})
	}

	useEffect((() => {
		getArticleTable()
	}), [])
	return (
		<div>
			<div className="selector">1</div>
			<div><Table dataSource={articleData} columns={columns} loading={loading}/></div>
		</div>
	)
}

export default ArticleEdit
