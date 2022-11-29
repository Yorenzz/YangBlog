import React, {
	useEffect, useState,
} from 'react'
import {
	Button, Modal, Form, Input,
} from 'antd'
import { LabelDataType } from '../../typing/label'
// @ts-ignore
import { SketchPicker } from 'react-color'
import { updateLabel } from '../../api'
interface middleProps {
	visible: boolean,
	setVisible: (b: boolean)=>void,
	edit: LabelDataType | null,
	refresh: ()=>void
}
const LabelEditDialog:React.FC<middleProps> = (props) => {
	const [form] = Form.useForm()
	const [color, setColor] = useState(props.edit?.color)

	const init = () => {
		form.setFieldValue('name', props.edit?.name)
		form.setFieldValue('color', props.edit?.color)
	}

	useEffect(() => {
		init()
	}, [props.edit])
	useEffect(() => {
		setColor(props.edit?.color)
	}, [props.edit])

	const colorChange = (c: { hex: React.SetStateAction<string | undefined> }) => {
		setColor(c.hex)
	}

	const handleOk = () => {
		console.log(props.edit?.key)
		props.setVisible(false)
		updateLabel(props.edit?.key as string, form.getFieldValue('name'), color).then(r => {
			props.refresh()
		})
	}

	const handleCancel = () => {
		props.setVisible(false)
	}

	return (
		<>
			<Modal title="编辑标签" open={props.visible} onOk={handleOk} onCancel={handleCancel}>
				<Form
					form={form}
				>
					<Form.Item
						label="标签名字"
						name="name"
						rules={[{
							required: true,
							message: '请输入标签名字！',
						}]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="标签颜色"
						name="color"
						rules={[{
							required: true,
							message: '请选择标签颜色！',
						}]}
					>
						<SketchPicker
							width={300}
							color={color}
							onChangeComplete={colorChange}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default LabelEditDialog
