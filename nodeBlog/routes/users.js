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


// return new Promise(async (resolve,reject)=>{
//       const { username, password: upassword } = ctx.request.body
//       console.log(username,upassword)
//       let userInfo = null
//       let user=await userCheck(username)
//       let {uname,password}=user
//       console.log('1',uname,password)
//       if (username === uname && parseInt(upassword)=== password) {
//         userInfo = { userid: 1, username: uname }
//       }
//       console.log('2',userInfo)
//       let token = null
//       if (userInfo) {
//         token = jwt.sign(userInfo, SECRET, { expiresIn: '24h' })// 加密 userInfo
//       }
//       if (userInfo === null) {
//         reject({ errno: -1, msg: '登录失败' })// 登陆失败
//       }else{
//         resolve({ errno: 0, jwt: token })// 登陆成功给前端返回加密的token
//       }
//     }
// ).then(
//     val=>{
//       console.log('val',val)
//       ctx.body=val
//     }
// ).catch(
//     reason=>{
//       console.log('reason',reason)
//       ctx.body=reason
//     })

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
