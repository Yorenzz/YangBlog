const jwt = require('jsonwebtoken')
const SECRET = 'yangEzzz'
const router = require('koa-router')()
const { userCheck } = require('../service/user')
const utils = require('../utils/util')
const { verify } = require('jsonwebtoken')
const util = require('../utils/util')

router.prefix('/users')

router.get('/verify', async (ctx, next) => {
  const token = ctx.header.authorization.split(' ')[1]
  try {
    // 解密token
    const payload = verify(token, SECRET)
    console.log(payload)
    ctx.body = utils.success({ payload, token })
  } catch (e) {
    console.error(e)
    ctx.body = utils.fail('验证失败！', e)
  }
})

router.post('/login', async (ctx) => {
  const { username, password: upassword } = ctx.request.body
  // console.log(username,upassword)
  let userInfo = null
  try {
    const user = await userCheck(username, upassword)
    if (user[0] === undefined) {
      ctx.body = utils.fail('找不到该用户')
    } else if (user[0].password === upassword) {
      console.log('user', user)
      const { uname, _id, role } = user[0]
      userInfo = { userid: _id, username: uname, role }
      const token = jwt.sign(userInfo, SECRET, { expiresIn: '24h' }) // 加密 userInfo
      ctx.body = utils.success({ username: uname, role, token }, '登录成功')// 登陆成功给前端返回加密的token
    } else {
      ctx.body = utils.fail('密码错误')
    }
  } catch (e) {
    ctx.body = utils.fail('', e)
  }
})

// router.post('/login', async function (ctx, next) {
//   const { username, password } = ctx.request.body
//   const res = await Login(username, md5(password))
//   const data = { username: res[0].username, role: res[0].role }
//   // console.log(res)
//   if (res && res.length) {
//     data.token = jwt.sign(
//       {
//         res,
//       },
//       'Yorenz',
//       { expiresIn: '24h' },
//     )
//     ctx.body = utils.success(data, '登录成功')
//   } else {
//     ctx.body = utils.fail('用户名或密码错误')
//   }
// })

// router.get('/verify', async (ctx, next) => {
//   const  { token } = ctx.request.query
//   let res = {
//     username: '',
//     role: '',
//   }
//   jwt.verify(token, 'Yorenz', (err, data)=>{
//     if(err){
//       console.log('e', err)
//     }
//     else {
//       // console.log(data, 'data');
//       res.username = data.res[0].username
//       res.role = data.res[0].role
//     }
//   })
//   ctx.body = utils.success(res)
// })

module.exports = router
