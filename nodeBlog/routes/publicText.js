const {
  getText,
  getArticleById,
  getArticleByCategory,
  getArticleByTag,
  getTotalBlogNum,
  getAllTags,
  getTagsColor,
  setLabelColor,
  getDynamic,
} = require('../service/article')
const router = require('koa-router')()
const utils = require('../utils/util')
const request = require('request-promise')
router.prefix('/publictext')

router.post('/getText', async (ctx) => {
  const { pageSize, currentPage } = ctx.request.body
  try {
    const res = await getText(pageSize, currentPage)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
}) // 获取文章

router.get('/getArticleById', async (ctx) => {
  const { ID } = ctx.request.query
  try {
    const res = await getArticleById(ID)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getArticleByCategory', async (ctx) => {
  const { category } = ctx.request.query
  try {
    const res = await getArticleByCategory(category)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getArticleByTag', async (ctx) => {
  const { tag } = ctx.request.query
  try {
    const res = await getArticleByTag(tag)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getTotalBlogNum', async (ctx) => {
  try {
    const res = await getTotalBlogNum()
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getAllTags', async (ctx) => {
  try {
    const res = await getAllTags()
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getTagsColor', async (ctx) => {
  const { tagName } = ctx.request.query
  try {
    const res = await getTagsColor(tagName)
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getIP', async (ctx) => {
  try {
    const { ip } = ctx.request.query
    const req = await request(`http://ip-api.com/json/${ip}?lang=zh-CN`)
    ctx.body = utils.success(req)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

router.get('/getDynamic', async (ctx) => {
  try {
    const res = await getDynamic()
    ctx.body = utils.success(res)
  } catch (e) {
    ctx.body = utils.fail(e)
  }
})

module.exports = router
