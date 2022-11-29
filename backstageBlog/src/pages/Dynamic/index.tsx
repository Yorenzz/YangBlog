import React, {
	useEffect, useState,
} from 'react'
import {
	Editor, Toolbar,
} from '@wangeditor/editor-for-react'
import {
	IDomEditor, IEditorConfig, IToolbarConfig,
} from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import {
	Button, Switch,
} from 'antd'
import moment from 'moment'
import './style.scss'
import {
	sendArticle, sendContext,
} from '../../api'

const DynamicEdit:React.FC = () => {
	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [context, setContext] = useState('')
	const [self, setSelf] = useState(false)
	const toolbarConfig: Partial<IToolbarConfig> = { }
	const editorConfig: Partial<IEditorConfig> = { placeholder: '请输入内容...' }
	const onChange = (checked: boolean) => {
		setSelf(checked)
		console.log(`switch to ${checked}`)
	}

	const submit = () => {
		const date = moment().format('YYYY/MM/DD HH:mm:ss')
		const msg = {
			time: date,
			isSelf: self,
			like: 0,
			watch: 0,
			text: context,
		}
		console.log(msg)
		sendContext(msg).then((response: object) => {
			console.log('res', response)
		}).catch((reason: object) => {
			console.log('res', reason)
		})
	}

	return (
		<div>
			<div className="mb-10">动态内容：</div>
			<div style={{
				border: '1px solid #ccc',
				zIndex: 100,
			}}>
				<Toolbar
					editor={editor}
					defaultConfig={toolbarConfig}
					mode="default"
					style={{ borderBottom: '1px solid #ccc' }}
				/>
				<Editor
					defaultConfig={editorConfig}
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
			<div>
				<div className="selfSwitch">
					<span className="mr-10">仅自己可见</span>
					<Switch defaultChecked={self} onChange={onChange} />
				</div>
				<div className="selfSwitch">
					<Button onClick={submit}>发布动态</Button>
				</div>
			</div>

		</div>
	)
}

export default DynamicEdit
