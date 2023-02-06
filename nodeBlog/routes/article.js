const { insertArticle, getText, setLabelColor, getDynamic, getArticleData, getArticle, deleteArticle } = require('../service/article')
const {
  getCommentNum, getAllLabel,
  updateLabel,
  deleteLabel,
  getTextCountByCategory,
  insertContext,
} = require('../service/backstage')
const router = require('koa-router')()
const utils = require('../utils/util')
router.prefix('/article')

router.post('/send', async (ctx) => {
  const { _id, text, title, time, img, num, category, label, describe } = ctx.request.body
  try {
    const res = await insertArticle({
      _id,
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
  } catch (e) {
    ctx.body = utils.fail(e)
  }
}) // 上传文章

router.post('/setLabelColor', async (ctx) => {
  const { value, color } = ctx.request.body
  try {
    const res = await setLabelColor(value, color)
    ctx.body = utils.success(res.data)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getCommentNum', async (ctx) => {
  try {
    const res = await getCommentNum()
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getAllLabel', async (ctx) => {
  try {
    const res = await getAllLabel()
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.post('/updateLabel', async (ctx) => {
  const { id, value, color } = ctx.request.body
  try {
    const res = await updateLabel(id, value, color)
    ctx.body = utils.success(res, '编辑成功')
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.post('/deleteLabel', async (ctx) => {
  const { id } = ctx.request.body
  try {
    const res = await deleteLabel(id)
    ctx.body = utils.success(res, '删除成功')
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getPerCategoryText', async (ctx) => {
  const { category } = ctx.request.query
  try {
    const res = await getTextCountByCategory(category)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.post('/sendContext', async (ctx) => {
  const { text, time, like, watch, isSelf } = ctx.request.body
  try {
    const res = await insertContext({
      text,
      time,
      like,
      watch,
      isSelf,
    })
    ctx.body = utils.success(res.insertedId, '发布成功!')
  } catch (e) {
    ctx.body = utils.fail(e)
  }
}) // 上传文章

router.get('/getArticleData', async (ctx) => {
  const { category } = ctx.request.query
  try {
    const res = await getArticleData(category)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getArticle', async (ctx) => {
  const { id } = ctx.request.query
  try {
    const res = await getArticle(id)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/deleteArticle', async (ctx) => {
  const { id } = ctx.request.query
  try {
    const res = await deleteArticle(id)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

module.exports = router
