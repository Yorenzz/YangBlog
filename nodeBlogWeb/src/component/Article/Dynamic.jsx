import {Button, Col, Form, Row, Modal, Select, message} from "antd";
import {useEffect, useRef, useState} from "react"
import './style/dynamic.scss'
import { Input } from 'antd';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import {sendArticle} from "../../api";
import moment from 'moment'
export const Dynamic=()=>{
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
                <Form.Item
                    label="动态内容"
                >
                    <MdEditor
                        className='mdEditor'
                        ref={mdEditorText}
                        plugins={[
                            'font-bold',
                            'font-italic',
                            'font-strikethrough',
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
            </Form>
            <Button type="primary" className='buttonContainer' onClick={submit}>
                发布动态
            </Button>
        </>
    )
}
