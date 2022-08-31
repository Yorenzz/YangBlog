import axios from 'axios'
import config from '../config/index.js'
const service=axios.create({
    baseURL: config.baseApi,
    timeout: 30000
})

// service.interceptors.request.use(req => {
//     const headers = req.headers
//     if (!headers.Authorization) {
//         console.log(1);
//     }
//     // headers.Authorization = 'Bear Jack'
//     return req
// })

// service.interceptors.response.use(res => {
// const { code, data, msg } = res.data
// console.log(res.data, '1')
// if (code === 200) {
//     ElMessage.success(msg)
//     return data
// } else if (code === 40001) {
//     ElMessage.error(msg || 'Token验证失败')
//     setTimeout(() => {
//     router.push('/login').then(r => {})
//     })
//     return Promise.reject(msg)
// } else {
//     ElMessage.error(msg || '异常')
//     return Promise.reject(msg || '异常')
// }
// })

const request = options => {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
      options.params = options.data
    }
    return service(options)
}

export const mock=axios.create({
    baseURL: 'https://www.fastmock.site/mock/6e50fe4b0a3bfe4bdc0841a05c70e59e/blog',
    timeout: 30000
})
export default request