import {Button, Card, Col, Form, message, Row, Modal} from "antd";
import {useEffect, useRef, useState} from "react"
import './article.css'
import { Input } from 'antd';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import {sendArticle} from "../../api";
import {useNavigate} from "react-router-dom";
import {logout} from "../../utils/routeValidate";
export const Article=()=>{
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const mdEditor = useRef(null);
    const [title,setTitle]=useState('')
    const [img,setImg]=useState('')
    const [num,setNum]=useState(200)
    const [category,setCategory]=useState('study')
    const [label,setLabel]=useState({
        1:'react',
        2:'blog'
    })
    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    }
    const navigate = useNavigate()
    const submit=()=>{
        // mdEditor.current.insertText('sss')
        const mes={
            text:mdEditor.current.getHtmlValue(),
            title,
            time:new Date(),
            img,
            num,
            category,
            label
        }
       console.log(mes)
        sendArticle(mes).then(response=>{
            console.log('res',response)
        })
        console.log('editor',mdEditor.current.getHtmlValue())
    }
    const onFinish=()=>{

    }
    const onFinishFailed=()=>{

    }
    return (
        <>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                        label="文章标题"
                        name="title"
                        rules={[{ required: true, message: '请输入标题！' }]}
                    >
                        <Input onChange={e=>setTitle(e.target.value)}/>
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        label="文章首图url"
                        name="url"
                        rules={[{ required: true, message: '请输入url！' }]}
                    >
                        <Input onChange={e=>setImg(e.target.value)}/>
                    </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label="文章编辑"
                >
                    <MdEditor
                        className='mdEditor'
                        ref={mdEditor}
                        plugins={[
                            'header',
                            'font-bold',
                            'font-italic',
                            'font-underline',
                            'font-strikethrough',
                            'list-unordered',
                            'list-ordered',
                            'block-quote',
                            'block-code-inline',
                            'block-code-block',
                            'table',
                            'image',
                            'link',
                            'logger',
                            'mode-toggle',
                            'full-screen',
                            'tab-insert'
                        ]}
                        renderHTML={text => mdParser.render(text)}
                        onChange={handleEditorChange}
                    />
                </Form.Item>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label="分类"
                            name="category"
                            rules={[{ required: true, message: '请选择分类！' }]}
                        >
                            <Input onChange={e=>setCategory(e.target.value)}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="标签"
                            name="label"
                        ><Input onChange={e=>setLabel(e.target.value)}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Button type="primary" className='buttonContainer' onClick={submit}>
                上传文章
            </Button>
        </>
    )
}
