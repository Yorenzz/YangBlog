const router = require('koa-router')()
const request = require('request-promise')
router.prefix('/tool')

router.get('/getBingPicture', async (ctx) => {
    let ImageString = await request('https://www.bing.com/hp/api/model?mkt=zh-CN')
    const res=JSON.parse(ImageString)
    console.log('ip', res.MediaContents[0].ImageContent.Image.Url)
    ctx.body = res.MediaContents[0].ImageContent.Image.Url
})
module.exports = router