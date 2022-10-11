const jwt = require("jsonwebtoken");
const SECRET='yangEzzz'
const router = require('koa-router')()
const {userCheck} = require("../service/user");
const {verify} = require("jsonwebtoken")

router.prefix('/users')

router.get('/verify', async (ctx, next) => {
  const token = ctx.header.authorization
    //console.log(token)
  try{
    // 解密token
    const payload = await verify(token.split(' ')[1], SECRET)
    //console.log(payload)
    ctx.body = {
      errno: 0,
      userInfo: payload
    }
  }catch(e){
    console.error(e)
    ctx.body = {
      errno: -1,
      msg: 'Verify token failed.'
    }
  }
})

router.post('/login', async (ctx) => {
  const { username, password: upassword } = ctx.request.body
  //console.log(username,upassword)
  let userInfo = null
  let user=await userCheck(username,upassword)
  console.log('user',user)
  if(user.errno===0){
    let {uname}=user.data
    //console.log('1',uname,password)
    userInfo = { userid: 1, username: uname }
    //console.log('2',userInfo)
    let token = jwt.sign(userInfo, SECRET, { expiresIn: '24h' })  // 加密 userInfo
    ctx.body = { errno: user.errno, jwt: token }// 登陆成功给前端返回加密的token
  }
  else if(user.errno===-1)
      ctx.body = { errno: user.errno, msg: user.message }// 登陆失败
})


router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  const res = await Login(username, md5(password))
  const data = { username: res[0].username, role: res[0].role }
  // console.log(res)
  if (res && res.length) {
    data.token = jwt.sign(
      {
        res,
      },
      'Yorenz',
      { expiresIn: '24h' },
    )
    ctx.body = utils.success(data, '登录成功')
  } else {
    ctx.body = utils.fail('用户名或密码错误')
  }
})

router.get('/verify', async (ctx, next) => {
  const  { token } = ctx.request.query
  let res = {
    username: '',
    role: '',
  }
  jwt.verify(token, 'Yorenz', (err, data)=>{
    if(err){
      console.log('e', err)
    }
    else {
      // console.log(data, 'data');
      res.username = data.res[0].username
      res.role = data.res[0].role
    }
  })
  ctx.body = utils.success(res)
})

module.exports = router
