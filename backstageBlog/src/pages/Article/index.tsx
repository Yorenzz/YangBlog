import React, { useEffect, useRef, useState } from 'react'
import * as qiniu from 'qiniu-js'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import './style.scss'
import { DownOutlined, FileImageOutlined } from '@ant-design/icons'
import { Button, Dropdown, Form, Input, MenuProps, Popover, Select, Image, Empty, Progress, Skeleton } from 'antd'
import { getAllTags, sendArticle, getRandomImage, getArticle } from '../../api'
import { IMAGE_TYPE_API } from '../../constant/api'
import { ImageApi } from '../../typing/constant'
import dayjs from 'dayjs'
import { log } from 'echarts/types/src/util/log'
import { useSelector } from 'react-redux'
import { DomEditor } from '@wangeditor/editor'
import { useParams } from 'react-router-dom'
type InsertFnType = (url: string, alt: string, href: string) => void

const Article: React.FC = () => {
	const UPLOAD_TOKEN = useAppSelector((state) => state.userInfo.UPLOAD_TOKEN)
	const params = useParams()
	const [loadings, setLoading] = useState<boolean>(false)
	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [editor2, setEditor2] = useState<IDomEditor | null>(null)
	const [context, setContext] = useState('')
	const [article, setArticle] = useState('')
	const [label, setLabel] = useState([])
	const [imgType, setImgType] = useState<String>('SCENE')
	const [children, setChildren] = useState<Array<{label:string, value:string}>>([])
	const [imgPercent, setImgPercent] = useState<number>(0)
	const [skLoading, setSkLoading] = useState(true)
	const toolbar = DomEditor.getToolbar(editor as IDomEditor)
	const toolbarConfig1: Partial<IToolbarConfig> = {
		excludeKeys: [
			'group-image',
			'group-video',
			'divider',
		],
	}
	const editorConfig1: Partial<IEditorConfig> = { placeholder: '请输入内容...' }
	const toolbarConfig2: Partial<IToolbarConfig> = { }
	const editorConfig2: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
		MENU_CONF: {},
	}

	// @ts-ignore
	editorConfig2.MENU_CONF['uploadImage'] = {
		// 自定义上传
		async customUpload(file: File, insertFn: InsertFnType) {
			// file 即选中的文件
			// 自己实现上传，并得到图片 url alt href
			// 最后插入图片
			console.log(file)
			const observable = qiniu.upload(
				file,
				`editor-image/${file.name + file.lastModified}`,
				UPLOAD_TOKEN,
			)
			observable.subscribe({
				next(res) {
					setImgPercent(value => res.total.percent)
				},
				error(err) {
					console.warn('err', err)
				},
				complete(res) {//来到这里就是上传成功了。。
					console.log('complete', res)
					insertFn(`http://image.yangezzz.top/${res.key}`, '', '')

					setImgPercent(value => 0)
				},
			})
		},
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
	]

	const [form] = Form.useForm()
	const imgValue = Form.useWatch('img', form)
	const handleChange = (value: React.SetStateAction<never[]>) => {
		console.log(value)
		setLabel(value)
	}

	const submit = async () => {
		try {
			const values = await form.validateFields()
			console.log('Success:', values)
			const date = dayjs().format('YYYY/MM/DD HH:mm:ss')
			const labelArr = Array.from(Object.values(label), x => x)
			const mes = {
				_id: params.id || null,
				text: article,
				describe: context,
				title: form.getFieldValue('title'),
				time: date,
				img: form.getFieldValue('img'),
				num: article.length,
				category: form.getFieldValue('category'),
				label: labelArr,
			}
			sendArticle(mes).then((response) => {
				console.log('res', response)
			}).catch((reason: object) => {
				console.warn('res', reason)
			})
		} catch (errorInfo) {
			console.log('Failed:', errorInfo)
		}
	}

	useEffect(() => {
		getAllTags()
			.then(res => {
				const tagList = res
				const optionChildren:Array<{label:string, value:string}> = []
				for (let i = 0; i < tagList.length; i++) {
					optionChildren.push({
						label: tagList[i].value,
						value: tagList[i].value,
					})
				}
				setChildren(optionChildren)
			})
			.catch(e => {
				console.warn(e)
			})
	}, [])

	useEffect(() => {
		if(params.id) {
			setSkLoading(true)
			getArticle(params.id).then((res) => {
				console.log(res)
				setContext(res[0].describe)
				setArticle(res[0].text)
				form.setFieldValue('img', res[0].img)
				form.setFieldValue('category', res[0].category)
				form.setFieldValue('title', res[0].title)
				const arr = res[0].label
				setLabel(arr)
				setSkLoading(false)
			}).catch((err) => {
				console.warn(err)
			})
		}
		setSkLoading(false)
	}, [])

	const onHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setLoading(true)
		getRandomImage(IMAGE_TYPE_API[imgType as keyof ImageApi]).then(res => {
			form.setFieldValue('img', res)
		}).catch(e => {
			console.warn(e)
		}).finally(() => {
			setLoading(false)
		})
	}

	const handleMenuClick: MenuProps['onClick'] = (e) => {
		setImgType(e.key)
	}

	return (
		<Skeleton loading={skLoading} active>
			<div>
				<Form
					form={form}
					layout="vertical"
				>
					<Form.Item
						name="title"
						label="文章标题"
						rules={[{
							required: true,
							message: '请填写文章标题，不少于三个字',
						}, {
							type: 'string',
							min: 3,
							message: '不少于三个字',
						}]}
						validateTrigger="onBlur"
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="文章首图url"
						required
					>
						<div className="titleImage">
							<Form.Item
								name="img"
								noStyle
								rules={[{
									required: true,
									message: '请填写首图URL，用于首页展示，可以点击右侧按钮获取随机图片',
								}]}
								validateTrigger="onBlur"
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
							<Popover
								content={
									<Image
										className="previewImg"
										width={400}
										height={200}
										src={imgValue}
										fallback={'/vite.svg'}
										preview={false}
									/>
								}
								trigger="click" placement="bottomRight"
							>
								<Button
									type="dashed"
									loading={loadings}
									icon={<FileImageOutlined />}
								>
								预览
								</Button>
							</Popover>
						</div>
					</Form.Item>

					<Form.Item
						label="文章简介"
					>
						<div style={{
							border: '1px solid #ccc',
							zIndex: 100,
						}}>
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
								style={{
									height: '500px',
									overflowY: 'hidden',
								}}
							/>
						</div>
					</Form.Item>
					<Form.Item
						label="文章正文"
					>
						<div style={{
							border: '1px solid #ccc',
							zIndex: 100,
						}}>
							<Progress percent={imgPercent} />
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
								style={{
									height: '500px',
									overflowY: 'hidden',
								}}
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
						<Select
							mode="tags"
							className="tagInput"
							placeholder="选择或输入标签..."
							value={label}
							options={children}
							onChange={handleChange}
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={submit}>提交</Button>
					</Form.Item>
				</Form>
			</div>
		</Skeleton>
	)
}

export default Article
