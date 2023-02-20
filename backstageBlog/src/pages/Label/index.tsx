import React, { useEffect, useState } from 'react'
import { Button, Popconfirm, Space, Spin, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { deleteLabel, getAllLabel } from '../../api'
import LabelEditDialog from './LabelEditDialog'
import { LabelDataType, LabelResType } from '../../typing/label'

const Label:React.FC = () => {
	const columns: ColumnsType<LabelDataType> = [
		{
			title: '序号',
			dataIndex: 'no',
			key: 'no',
		},
		{
			title: '名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '颜色',
			key: 'color',
			render: (_, record) => (
				<div style={{
					background: record.color,
					width: '150px',
					height: '30px',
				}}>
				</div>
			),
		},
		{
			title: '操作',
			key: 'action',
			render: (_, record) => (
				<Space>
					<Button onClick={() => editLabel(record)}>编辑</Button>
					<Popconfirm
						title="确定删除该标签？"
						onConfirm={() => deleteTheLabel(record)}
						okText="确定"
						cancelText="取消"
					>
						<Button>删除</Button>
					</Popconfirm>
				</Space>
			),
		},
	]
	const editLabel = (record: LabelDataType):void => {
		setModalVisible(true)
		setEditData(record)
		console.log(record)
	}
	const deleteTheLabel = (record: LabelDataType):void => {
		console.log(record)
		deleteLabel(record.key).then(r => {
			getLabel()
		})
	}
	const [modalVisible, setModalVisible] = useState(false)
	const [labelData, setLabelData] = useState<LabelDataType[]>([])
	const [editData, setEditData] = useState<LabelDataType|null>(null)
	const [loading, setLoading] = useState(false)
	const getLabel = () => {
		setLoading(true)
		getAllLabel().then((res: LabelResType[]) => {
			console.log(res)
			setLabelData((res).map((item, index) => {
				return {
					no: index,
					key: item._id,
					name: item.value,
					color: item.color,
				}
			}))
		}).catch((e) => {
			console.warn(e)
		}).finally(() => {
			setLoading(false)
		})
	}
	useEffect(() => {
		getLabel()
	}, [])
	return (
		<>
			<Spin spinning={loading}>
				<Table
					columns={ columns }
					dataSource={ labelData }
				/>
			</Spin>
			<LabelEditDialog
				visible={ modalVisible }
				edit={editData}
				setVisible={ (b:boolean) => {
					setModalVisible(b)
				} }
				refresh={getLabel}
			/>
		</>
	)
}

export default Label
