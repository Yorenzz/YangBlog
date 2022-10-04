import React, { useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import { Form } from 'antd'

const Article: React.FC = () => {
	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [editor2, setEditor2] = useState<IDomEditor | null>(null)
	const [context, setContext] = useState('')
	const [article, setArticle] = useState('')
	const toolbarConfig1: Partial<IToolbarConfig> = { }
	const editorConfig1: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
	}
	const toolbarConfig2: Partial<IToolbarConfig> = { }
	const editorConfig2: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
	}
	return (
		<div>
			<Form>
				<Form.Item>

				</Form.Item>
				<Form.Item>

				</Form.Item>

				<Form.Item>
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
				<Form.Item>
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
			</Form>
		</div>
	)
}

export default Article
