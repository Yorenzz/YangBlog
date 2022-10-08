import React, { useEffect, useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import { Button, Form, Input, Select } from 'antd'
import { getAllTags, sendArticle } from '../../api'
import moment from 'moment'

const Article: React.FC = () => {
	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [editor2, setEditor2] = useState<IDomEditor | null>(null)
	const [context, setContext] = useState('')
	const [article, setArticle] = useState('')
	const [title,setTitle]=useState('')
	const [img,setImg]=useState('')
	const [num,setNum]=useState(200)
	const [category,setCategory]=useState('study')
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
	const [form] = Form.useForm();
	const handleChange = (value: object) => {
		let obj = (Object.assign({}, value))
		setLabel(obj)
	}

	const submit= async ()=>{
		try {
			const values = await form.validateFields();
			console.log('Success:', values);
		} catch (errorInfo) {
			console.log('Failed:', errorInfo);
		}
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
	}

	useEffect(()=>{
		getAllTags()
		.then(res => {
			const tagList = res.data
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

	const checkText = () =>{
		return !!(context && context.length > 0);

	}

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
					rules={[{ required: true, message: '请填写文章首图url，或者点击右侧按钮随机图片' }]}
					validateTrigger="onBlur"
				>
					<Input />
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
