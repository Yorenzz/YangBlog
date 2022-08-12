const {
  getText,
  getArticleById,
  getArticleByCategory,
  getArticleByTag,
  getTotalBlogNum,
  getAllTags,
  getTagsColor,
  setLabelColor,
} = require('../service/article')
const router = require('koa-router')()
const request = require('request-promise')
router.prefix('/publictext')

router.post('/getText', async (ctx) => {
  const { pageSize, currentPage } = ctx.request.body
  let res = await getText(pageSize, currentPage)
  console.log(res)
  ctx.body = res.data
}) //获取文章

router.get('/getArticleById', async (ctx) => {
  const { ID } = ctx.request.query
  let res = await getArticleById(ID)
  ctx.body = res.data
})

router.get('/getArticleByCategory', async (ctx) => {
  const { category } = ctx.request.query
  let res = await getArticleByCategory(category)
  ctx.body = res.data
})

router.get('/getArticleByTag', async (ctx) => {
  const { tag } = ctx.request.query
  console.log('body', tag)
  let res = await getArticleByTag(tag)
  ctx.body = res.data
})

router.get('/getTotalBlogNum', async (ctx) => {
  let res = await getTotalBlogNum()
  ctx.body = res.data
})

router.get('/getAllTags', async (ctx) => {
  const res = await getAllTags()
  ctx.body = res.data
})

router.get('/getTagsColor', async (ctx) => {
  const { tagName } = ctx.request.query
  const res = await getTagsColor(tagName)
  ctx.body = res.data
})

module.exports = router
