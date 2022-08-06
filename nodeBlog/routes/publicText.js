const {
  getText,
  getArticleById,
  getArticleByCategory,
  getArticleByTag,
  getTotalBlogNum,
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
  console.log('body', ID)
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

router.get('/getIP', async (ctx) => {
  let req = await request('https://realip.cc/')
  console.log('ip', req)
  ctx.body = req
})

module.exports = router
