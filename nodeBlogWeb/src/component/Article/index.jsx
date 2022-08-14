import {Button, Modal, Select, message} from "antd";
import {useEffect, useRef, useState} from "react"
import './style/article.scss'
import { Input } from 'antd';
import MarkdownIt from 'markdown-it';
import Editor from 'react-markdown-editor-lite';
import TabSpace from "../../editorPlugins/tabSpace";
import 'react-markdown-editor-lite/lib/index.css';
import { getAllTags, sendArticle, setLabelColor } from '../../api'
import moment from 'moment'
import { getRandomColor } from '../../common/util'
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
  const  [children, setChildren] = useState([]);
  const { Option } = Select;

  useEffect(()=>{
    getAllTags()
    .then(res => {
      const tagList = res.data
      console.log('tag', tagList)
      const optionChildren = []
      for (let i = 0; i < tagList.length; i++) {
        optionChildren.push(<Option key={tagList[i].value}>{tagList[i].value}</Option>);
      }
      setChildren(optionChildren)
    })
    .catch(e => {
      console.warn(e)
    })
  },[])

  function handleChange(value) {
    let obj = (Object.assign({}, value))
    setLabel(obj)
  }

    const submit=()=>{
        const date=moment().format('YYYY/MM/DD HH:mm:ss')
        const labelArr = Array.from(Object.values(label),x=>x)
        const mes={
            text:mdEditorText.current.getHtmlValue(),
            describe:mdEditorDescribe.current.getHtmlValue(),
            title,
            time:date,
            img,
            num:mdEditorText.current.getMdValue().length,
            category,
            label:labelArr
        }
        sendArticle(mes).then(response=>{
            console.log('res',response)
            message.success('上传成功').then(()=>{
              labelArr.map(item=>{
                const color = getRandomColor()
                console.log('col', item, color)
                setLabelColor({ value:item, color }).then(res=>{

                }).catch(e=>{})
              })
            })
        }).catch(reason=>{
            console.log('res',reason.message)
            message.error('111'+reason.message)
        })
    }
    const getBingPic=()=>{
      setImg('111')
      console.log(img)
    }
    return (
        <>
          <div>
            <div className="titleInput">
              <div className="title">
                <span className="redText">*</span>文章标题
                <Input value={title} onChange={e=>setTitle(e.target.value)}/>
              </div>

              <div className="url">
                <div>
                  <span className="redText">*</span>文章首图url
                  <div className="inputUrl">
                    <Input value={img} onChange={e=>setImg(e.target.value)}/>
                    <Button onClick={getBingPic}>获取随机图片</Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="redText">*</span><span>文章描述</span>
              <Editor
                  className='describe'
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
            </div>

            <div>
              <span className="redText">*</span><span>文章正文</span>
              <Editor
                  className='article'
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
            </div>

            <div className="categoryTag">
              <div className="category" >
                <span className="redText">*</span>分类
                <Input onChange={e=>setCategory(e.target.value)}/>
              </div>
              <div className="tag">
                <span>标签</span>
                <Select mode="tags" className="tagInput" placeholder="Tags Mode" onChange={handleChange}>
                  {children}
                </Select>
              </div>

            </div>

            <div className='buttonContainer'>
              <Button type="primary" className='button' onClick={submit}>
                上传文章
              </Button>
            </div>
          </div>


        </>
    )
}
