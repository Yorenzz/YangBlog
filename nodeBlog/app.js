const handleBlogRouter=require('./src/router/blog')
const handleUserRouter=require('./src/router/user')
const querystring=require('querystring')

const serverHandle=(req,res)=> {
    //设置返回格式为json
    res.setHeader('Content-type', 'application/json')

    const url=req.url
    req.path=url.split('?')[0]
    console.log(req.path)
    req.query=querystring.parse(url.split('?')[0])
    const blogData=handleBlogRouter(req,res)
    console.log(blogData)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }
    const userData=handleUserRouter(req,res)
    if(userData){
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    res.writeHead(404,{"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()

}
module.exports=serverHandle

