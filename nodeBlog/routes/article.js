const router = require('koa-router')()
router.prefix('/article')

router.post('/send',async (ctx)=>{
    const {text,title,time,img,num,category,label}=ctx.request.body
    console.log('?',text,title,time,img,num,category,label)
    console.log(typeof text)
    ctx.body={'testSuccess':1}
})//上传文章

router.get('/getText',async (ctx)=>{
    const {category}=ctx.request.body
    console.log('get',category)
    let text='sssss'
    ctx.body={text}
})//获取文章

module.exports = router