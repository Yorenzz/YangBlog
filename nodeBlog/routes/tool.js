const router = require('koa-router')()
const request = require('request-promise')
const utils = require('../utils/util')
router.prefix('/tool')

router.get('/getBingPicture', async (ctx) => {
    let ImageString = await request('https://www.bing.com/hp/api/model?mkt=zh-CN')
    const res=JSON.parse(ImageString)
    ctx.body = utils.success(res.MediaContents[0].ImageContent.Image.Url)
})

router.get('/getHistoryToday', async (ctx) => {
    const res = await request('https://api.oick.cn/lishi/api.php')
    console.log('today',res)
    ctx.body = utils.success(res)
})

router.get('/getSentence', async (ctx) => {
    const res = await request('https://v1.hitokoto.cn/?c=a')
    console.log('sentence',typeof res)
    ctx.body = utils.success(JSON.parse(res))
})


module.exports = router