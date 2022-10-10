const { insertArticle, getText, setLabelColor } = require('../service/article')
const { getCommentNum } = require('../service/backstage')
const router = require('koa-router')()
const utils = require('../utils/util')
router.prefix('/article')

router.post('/send', async (ctx) => {
  const { text, title, time, img, num, category, label, describe } =
    ctx.request.body
  console.log('?', text, describe, title, time, img, num, category, label)
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
  console.log('resRoute', res)
  if (res.errno === 0) {
    ctx.body = { data: res.data.insertedId, errno: res.errno }
  } else if (res.errno === -1) {
    ctx.status = 500
    ctx.body = { data: res.data, errno: res.errno }
  }
}) //上传文章

router.post('/setLabelColor', async (ctx) => {
  const { value, color } = ctx.request.body
  let res = await setLabelColor(value, color)
  ctx.body = res.data
})

router.get('/getCommentNum', async (ctx)=>{
  const res = await getCommentNum()
  ctx.body = utils.success(res)
})

module.exports = router
