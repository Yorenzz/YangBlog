const {getText, getArticleById} = require("../service/article");
const router = require('koa-router')()
router.prefix('/publictext')

router.post('/getText',async (ctx)=>{
    const {category,pageSize,currentPage}=ctx.request.body
    console.log('get',pageSize,currentPage)
    let res=await getText(category,pageSize,currentPage)
    ctx.body=res.data
})//获取文章

router.get('/getArticleById', async (ctx)=>{
    const {ID}=ctx.request.query
    console.log('body', ID)
    let res=await getArticleById(ID)
    ctx.body=res.data
})

module.exports = router