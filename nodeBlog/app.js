const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const jwtKoa = require('koa-jwt')
const SECRET = 'yangEzzz'
const index = require('./routes/index')
const users = require('./routes/users')
const article = require('./routes/article')
const publicText = require('./routes/publicText')
const tool = require('./routes/tool')
const util = require('./utils/util')
const { mongoose } = require('mongoose')
const { log } = require('debug')
const { url, dbName } = require('./config')
mongoose.connect(`${url}/${dbName}?authSource=admin`, () => {
  console.log('MongoDB连接成功')
})
mongoose.connection.on('err', console.error)

onerror(app)
app.use(cors())
// middlewares
/* 当token验证异常时候的处理，如token过期、token错误 */
app.use(async (ctx, next) => {
  await next().catch(err => {
    if (err.status === 401) {
      ctx.status = 200
      ctx.body = util.fail('登录失效', '', util.CODE.AUTH_ERROR)
    } else {
      throw err
    }
  })
})

app.use(
  jwtKoa({
    // 密匙
    secret: SECRET,
  }).unless({
    // 自定义忽略jwt验证的目录
    path: [/^\/users\/login/, /^\/publictext\/*/, /^\/tool\/*/],
  }),
)

app.use(
  bodyparser({ enableTypes: ['json', 'form', 'text'] }),
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', { extension: 'pug' }),
)

// logger

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(publicText.routes(), publicText.allowedMethods())
app.use(tool.routes(), tool.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
