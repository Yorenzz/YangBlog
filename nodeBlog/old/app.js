const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/x-www.js-form-urlencoded') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData),
      )
    })
  })
}

const serverHandle = (req, res) => {
  // 设置返回格式为json
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  const url = req.url
  req.path = url.split('?')[0]
  console.log(req.body)
  req.query = querystring.parse(url.split('?')[1])

  getPostData(req).then((postData) => {
    req.body = postData
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(
        JSON.stringify(blogData),
      )
      return
    }
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(
        JSON.stringify(userData),
      )
      return
    }
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 Not Found\n')
    res.end()
  })
}
module.exports = serverHandle
