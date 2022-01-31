const jwt = require("jsonwebtoken");
const SECRET='yangEzzz'
const router = require('koa-router')()
const util = require('util')
const verify = util.promisify(jwt.verify)

router.prefix('/users')

router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body
  console.log(username,password)
  let userInfo = null
  // 尝试登陆
  if (username === 'zhangsan' && password === 'abc') {
    userInfo = { userid: 1, username: 'zhangsan', nickName: '张三' }
  }

  // 加密 userInfo
  let token = null
  if (userInfo) {
    token = jwt.sign(userInfo, SECRET, { expiresIn: '24h' })
  }

  // 登陆失败
  if (userInfo === null) {
    ctx.body = { errno: -1, msg: '登录失败' }
    return
  }
  // 登陆成功给前端返回加密的token
  ctx.body = { errno: 0, jwt: token }
})

// 获取用户信息
// router.get('/getUserInfo', async (ctx, next) => {
//   const token = ctx.header.authorization
//   console.log(token)
//   try{
//     // 解密token
//     const payload = await verify(token.split(' ')[1], SECRET)
//     console.log(payload)
//     ctx.body = {
//       errno: 0,
//       userInfo: payload
//     }
//   }catch(e){
//     console.error(e)
//     ctx.body = {
//       errno: -1,
//       msg: 'Verify token failed.'
//     }
//   }
//
// })

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
