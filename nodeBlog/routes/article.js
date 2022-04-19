const {insertArticle} = require("../service/article");
const router = require('koa-router')()
router.prefix('/article')

router.post('/send',async (ctx)=>{
    const {text,title,time,img,num,category,label}=ctx.request.body
    console.log('?',text,title,time,img,num,category,label)
    let res=await insertArticle({text,title,time,img,num,category,label,readtime:0,})
    console.log('resRoute',res)
    if(res.errno===0){
        ctx.body={data:res.data.insertedId,errno:res.errno}
    }
    else if(res.errno===-1){
        ctx.status=500
        ctx.body={data:res.data,errno:res.errno}
    }
})//上传文章

router.get('/getText',async (ctx)=>{
    const {category}=ctx.request.body
    console.log('get',category)
    let text='sssss'
    ctx.body={text}
})//获取文章

module.exports = router