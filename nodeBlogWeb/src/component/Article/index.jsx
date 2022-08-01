import {Button, Col, Form, Row, Modal, Select, message} from "antd";
import {useEffect, useRef, useState} from "react"
import './article.css'
import { Input } from 'antd';
import MarkdownIt from 'markdown-it';
import Editor from 'react-markdown-editor-lite';
import TabSpace from "../../editorPlugins/tabSpace";
import 'react-markdown-editor-lite/lib/index.css';
import {sendArticle} from "../../api";
import moment from 'moment'
Editor.use(TabSpace)
export const Article=()=>{
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const mdEditorDescribe = useRef(null);
    const mdEditorText = useRef(null);
    const [title,setTitle]=useState('')
    const [img,setImg]=useState('')
    const [num,setNum]=useState(200)
    const [category,setCategory]=useState('study')
    const [label,setLabel]=useState({})
    let children = [];
    let labelObj={
        0:'react',
        1:'blog'
    }
    const { Option } = Select;

    for (let i = 0; i < 2; i++) {
        children.push(<Option key={labelObj[i]}>{labelObj[i]}</Option>);
    }
    function handleChange(value) {
        let obj = (Object.assign({}, value))
        console.log(value,obj,labelObj)
        setLabel(obj)

    }
    const submit=()=>{
        const date=moment(new Date()).utcOffset(8).format('YYYY MMMM D dddd, H:mm:ss')
        console.log('date',typeof date)
        const mes={
            text:mdEditorText.current.getHtmlValue(),
            describe:mdEditorDescribe.current.getHtmlValue(),
            title,
            time:date,
            img,
            num,
            category,
            label
        }
       //console.log(mes)
        sendArticle(mes).then(response=>{
            console.log('res',response)
            message.success('上传成功')
        }).catch(reason=>{
            console.log('res',reason.message)
            message.error('111'+reason.message)
        })
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
                    label="文章描述"
                >
                    <Editor
                        className='mdEditor'
                        ref={mdEditorDescribe}
                        plugins={[
                            'header',
                            'font-bold',
                            'font-italic',
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
                            "tab-insert",
                            'mode-toggle',
                            'full-screen',
                            'block-wrap',
                            'tabSpace'
                        ]}
                        renderHTML={text => mdParser.render(text)}
                    />
                </Form.Item>
                <Form.Item
                    label="文章正文"
                >
                    <Editor
                        className='mdEditor'
                        ref={mdEditorText}
                        plugins={[
                            'header',
                            'font-bold',
                            'font-italic',
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
                            'tab-insert',
                            'block-wrap'
                        ]}
                        renderHTML={text => mdParser.render(text)}
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
                        >
                            <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
                                {children}
                            </Select>
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
