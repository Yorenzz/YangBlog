const router = require('koa-router')()
const request = require('request-promise')
const utils = require('../utils/util')
const { UPLOAD_TOKEN } = require('../config/qiniu')
router.prefix('/tool')

router.get('/getBingPicture', async (ctx) => {
  const ImageString = await request('https://www.bing.com/hp/api/model?mkt=zh-CN')
  const res = JSON.parse(ImageString)
  ctx.body = utils.success(res.MediaContents[0].ImageContent.Image.Url)
})

router.get('/getHistoryToday', async (ctx) => {
  const res = await request('https://api.oick.cn/lishi/api.php')

  ctx.body = utils.success(res)
})

router.get('/getSentence', async (ctx) => {
  const res = await request('https://v1.hitokoto.cn/?c=a')
  ctx.body = utils.success(JSON.parse(res))
})

router.get('/getRandomImage', async (ctx) => {
  const { type } = ctx.request.query
  const { data } = JSON.parse(await request(`https://api.gmit.vip/Api/${type}?format=json`))
  ctx.body = utils.success(data?.url)
})

router.get('/uploadToken', async (ctx) => {
  ctx.body = utils.success(UPLOAD_TOKEN)
})

module.exports = router
