const { insertArticle, getText, setLabelColor } = require('../service/article')
const { getCommentNum, getAllLabel } = require('../service/backstage')
const router = require('koa-router')()
const utils = require('../utils/util')
router.prefix('/article')

router.post('/send', async (ctx) => {
  const { text, title, time, img, num, category, label, describe } = ctx.request.body
  try{
    let res = await insertArticle({
      text,
      describe,
      title,
      time,
      img,
      num,
      category,
      label,
      readtime: 0,
    })
    ctx.body = utils.success(res.insertedId, '发布成功!')
  }catch(e){
    ctx.body=utils.fail(e)
  }
}) //上传文章

router.post('/setLabelColor', async (ctx) => {
  const { value, color } = ctx.request.body
  try{
    const res = await setLabelColor(value, color)
    ctx.body = utils.success(res.data)
  }catch(e){
    ctx.body=utils.fail(e)
  }
})

router.get('/getCommentNum', async (ctx)=>{
  try{
    const res = await getCommentNum()
    ctx.body = utils.success(res)
  }
  catch(e){
    ctx.body = utils.fail(e)
  }
})

router.get('/getAllLabel', async (ctx)=>{
  try{
    const res = await getAllLabel()
    ctx.body = utils.success(res)
  }
  catch(e){
    ctx.body = utils.fail(e)
  }
})

module.exports = router
