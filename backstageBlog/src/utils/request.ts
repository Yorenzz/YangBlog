import axios from 'axios'
import {message} from "antd"
import {handleUserResponse, logout} from "./routeValidate";

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 8000,
})

// service.interceptors.request.use(req => {
//     const headers = req.headers
//     const token = storage.getItem(TOKEN_KEY)
//     if (!headers.Authorization)
//         headers.Authorization = `Bearer ${token}`
//     return req
// })
//
// service.interceptors.response.use(res => {
//     const { code, data, msg } = res.data
//     if (code === 200) {
//         // msg && ElMessage.success(msg)
//         return data
//     } else if (code === 40001) {
//         // ElMessage.error(msg || 'Token验证失败')
//         storage.clearItem(TOKEN_KEY)
//         setTimeout(() => {
//             router.push('/login').then(r => {})
//         })
//         return Promise.reject(msg)
//     } else {
//         // ElMessage.error(msg || '异常')
//         return Promise.reject(msg || '异常')
//     }
// })

const request = (options) => {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    return service(options)
}

export default request
