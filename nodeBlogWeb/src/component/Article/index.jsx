import BraftEditor from "braft-editor";
import {Button, Card} from "antd";
import {useEffect, useState} from "react";
import 'braft-editor/dist/index.css'
import './article.css'
export const Article=()=> {

    const [editorState,setEditorState]=useState(BraftEditor.createEditorState(''))
    const [node,setNode]=useState(null)
    const controls = [
        'font-size', 'line-height','headings', 'separator',
        'list-ul', 'list-ol', 'italic', 'underline', 'emoji',  'separator',
        'text-indent', 'text-align', 'separator',
        'text-color', 'bold', 'code', 'hr']
    useEffect(()=>{
        setNode(document.getElementById('htmlCard'))
    })
    function test(e){
        //console.log(editorState.toHTML())
        //console.log(document.getElementById('htmlCard'))
        node.innerHTML=e.toHTML()
    }
        return (
            <div>
                <div className='editorContainer, className="editor-wrapper"'
                    style={{height:'600px', width: '100%',display: 'flex'}}>
                    <BraftEditor
                        className='braft'
                        style={{width: '50%'}}
                        value={editorState}
                        controls={controls}
                        onChange={(e)=>{setEditorState(e);test(e)}}
                        contentStyle={{height: 508, boxShadow: 'grey 0px 0px 5px 2px inset'}}
                    />
                    <Card id='htmlCard' style={{height: '100%',width: '50%',padding: '10px'}}>
                    </Card>
                </div>
                <div>
                    <Button type='primary' onClick={test} className='buttonContainer'>上传文章</Button>
                </div>

            </div>
        )
}
