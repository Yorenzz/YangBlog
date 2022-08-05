const {
  getText,
  getArticleById,
  getArticleByCategory,
} = require('../service/article')
const router = require('koa-router')()
const request = require('request-promise')
router.prefix('/publictext')

router.post('/getText', async (ctx) => {
  const { category, pageSize, currentPage } = ctx.request.body
  // console.log('get',pageSize,currentPage)
  let res = await getText(category, pageSize, currentPage)
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
  console.log('body', category)
  let res = await getArticleByCategory(category)
  ctx.body = res.data
})

router.get('/getIP', async (ctx) => {
  let req = await request('https://realip.cc/')
  console.log('ip', req)
  ctx.body = req
})

module.exports = router
