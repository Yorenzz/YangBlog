import React, { useEffect, useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import './style.scss'
import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Form, Input, MenuProps, Select } from 'antd'
import { getAllTags, sendArticle, getRandomImage } from '../../api'
import { IMAGE_TYPE_API } from '../../constant/api'
import moment from 'moment'
import { log } from 'echarts/types/src/util/log'

const Article: React.FC = () => {
	const [loadings, setLoading] = useState<boolean>(false);
	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [editor2, setEditor2] = useState<IDomEditor | null>(null)
	const [context, setContext] = useState('')
	const [article, setArticle] = useState('')
	const [label,setLabel]=useState({})
	const  [children, setChildren] = useState([]);
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
			label: '美女',
			key: '1',
		},
		{
			label: '二次元',
			key: '2',
		},
		{
			label: '动漫',
			key: '3',
		},
		{
			label: '汽车',
			key: '4',
		},
		{
			label: '风景',
			key: '5',
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
		console.log(e)
	}

	const handleMenuClick: MenuProps['onClick'] = (e) => {
		console.log('click', e);
	};

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
					name="img"
					label="文章首图url"
				>
					<div className="titleImage">
						<Input />
						<Dropdown.Button
							icon={<DownOutlined />}
							loading={loadings}
							menu={{ items, selectable: true,onClick: handleMenuClick, }}
							onClick={onHandleClick}
						>
							获取随机图片
						</Dropdown.Button>
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
