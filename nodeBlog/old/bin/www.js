const handleServer=require('../app')
const http=require('http')
const server=http.createServer(handleServer)
const PORT=8000
server.listen(PORT)
console.log('OK')
