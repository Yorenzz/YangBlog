import React, { useEffect, useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import './style.scss'
import { DownOutlined, FileImageOutlined } from '@ant-design/icons'
import { Button, Dropdown, Form, Input, MenuProps, Popover, Select, Image } from 'antd'
import { getAllTags, sendArticle, getRandomImage } from '../../api'
import { IMAGE_TYPE_API } from '../../constant/api'
import {ImageApi} from '../../typing/constant'
import moment from 'moment'
import { log } from 'echarts/types/src/util/log'

const Article: React.FC = () => {
	const [loadings, setLoading] = useState<boolean>(false);
	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [editor2, setEditor2] = useState<IDomEditor | null>(null)
	const [context, setContext] = useState('')
	const [article, setArticle] = useState('')
	const [label,setLabel]=useState({})
	const [imgType, setImgType] = useState<String>('SCENE')
	const [children, setChildren] = useState([]);
	const [imgURL, setImgURL] = useState<string>('')

	const toolbarConfig1: Partial<IToolbarConfig> = { }
	const editorConfig1: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
	}
	const toolbarConfig2: Partial<IToolbarConfig> = { }
	const editorConfig2: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
	}

	const items: MenuProps['items'] = [
		{
			label: '风景',
			key: 'SCENE',
		},
		{
			label: '美女',
			key: 'LADY',
		},
		{
			label: '二次元',
			key: 'TWICE',
		},
		{
			label: '动漫',
			key: 'DM',
		},
		{
			label: '汽车',
			key: 'CAR',
		},
	];

	const [form] = Form.useForm();
	const handleChange = (value: object) => {
		let obj = (Object.assign({}, value))
		setLabel(obj)
	}

	const submit= async ()=>{
		try {
			const values = await form.validateFields();
			console.log('Success:', values);
			const date=moment().format('YYYY/MM/DD HH:mm:ss')
			const labelArr = Array.from(Object.values(label),x=>x)
			const mes={
				text: article,
				describe: context,
				title: form.getFieldValue('title'),
				time: date,
				img: form.getFieldValue('img'),
				num: article.length,
				category: form.getFieldValue('category'),
				label:labelArr
			}
			sendArticle(mes).then((response: object)=>{
				console.log('res',response)
			}).catch((reason: object)=>{
				console.log('res',reason)
			})
		} catch (errorInfo) {
			console.log('Failed:', errorInfo);
		}
	}

	useEffect(()=>{
		getAllTags()
		.then(res => {
			const tagList = res
			console.log('tag', tagList)
			const optionChildren = []
			for (let i = 0; i < tagList.length; i++) {
				optionChildren.push(<Select.Option key={tagList[i].value}>{tagList[i].value}</Select.Option>);
			}
			setChildren(optionChildren as never)
		})
		.catch(e => {
			console.warn(e)
		})
	},[])

	const onHandleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
		setLoading(true)
		getRandomImage(IMAGE_TYPE_API[imgType as keyof ImageApi]).then(res=>{
			console.log(res)
			form.setFieldValue('img', res)
			setImgURL(res)
		}).catch(e=>{
			console.warn(e)
		}).finally(()=>{
			setLoading(false)
		})
	}

	const handleMenuClick: MenuProps['onClick'] = (e) => {
		setImgType(e.key)
	};

	const content = (
		<Image
			width={200}
			src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
		/>
	)

	return (
		<div>
			<Form
				form={form}
				layout="vertical"
			>
				<Form.Item
					name="title"
					label="文章标题"
					rules={[{ required: true, message: '请填写文章标题，不少于三个字' }, { type: 'string', min: 3 , message: '不少于三个字'}]}
					validateTrigger="onBlur"
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="文章首图url"
				>
					<div className="titleImage">
						<Form.Item
							name="img"
							noStyle
						>
							<Input />
						</Form.Item>
						<div>
							<Dropdown.Button
								icon={<DownOutlined />}
								loading={loadings}
								menu={{
									items,
									selectable: true,
									onClick: handleMenuClick,
									defaultSelectedKeys: ['SCENE'],
								}}
								onClick={onHandleClick}
							>
								获取随机图片
							</Dropdown.Button>
						</div>
						<Popover content={
							<Image
								className="previewImg"
								width={400}
								height={200}
								src={imgURL}
								preview={false}
							/>
						}
						         trigger="click" placement="bottomRight"
						>
						<Button type="dashed"
						        loading={loadings} icon={<FileImageOutlined />}>预览</Button>
						</Popover>
					</div>
				</Form.Item>

				<Form.Item
					label="文章简介"
				>
					<div style={{ border: '1px solid #ccc', zIndex: 100}}>
						<Toolbar
							editor={editor}
							defaultConfig={toolbarConfig1}
							mode="default"
							style={{ borderBottom: '1px solid #ccc' }}
						/>
						<Editor
							defaultConfig={editorConfig1}
							value={context}
							onCreated={setEditor}
							onChange={editor => setContext(editor.getHtml())}
							mode="default"
							style={{ height: '500px', overflowY: 'hidden' }}
						/>
					</div>
				</Form.Item>
				<Form.Item
					label="文章正文"
				>
					<div style={{ border: '1px solid #ccc', zIndex: 100}}>
						<Toolbar
							editor={editor2}
							defaultConfig={toolbarConfig2}
							mode="default"
							style={{ borderBottom: '1px solid #ccc' }}
						/>
						<Editor
							defaultConfig={editorConfig2}
							value={article}
							onCreated={setEditor2}
							onChange={editor => setArticle(editor.getHtml())}
							mode="default"
							style={{ height: '500px', overflowY: 'hidden' }}
						/>
					</div>
				</Form.Item>
				<Form.Item
					name="category"
					label="文章分类"
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="文章标签"
				>
					<Select mode="tags" className="tagInput" placeholder="选择或输入标签..." onChange={handleChange}>
						{children}
					</Select>
				</Form.Item>
				<Form.Item>
					<Button onClick={submit}>提交</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Article
