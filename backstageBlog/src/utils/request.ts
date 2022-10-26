import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config, { TOKEN_KEY } from '../config/index.js'
import {message} from "antd"
import { RequestInterface } from '../typing/request.js';
import storage from './storage.js';
import { useNavigate } from 'react-router-dom';

const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000,
})
// const navigate = useNavigate()
service.interceptors.request.use(req => {
    if(req&&req.headers){
        const headers = req.headers
        const token = storage.getItem(TOKEN_KEY)
        if (!headers.Authorization){
            headers.Authorization = `Bearer ${token}`
        }
    }
    return req
})

service.interceptors.response.use((res: AxiosResponse) => {
    const { code, data, msg } = res.data
    if (code === 200) {
        msg && message.success(msg)
        return data
    } else if (code === 40001) {
        message.error(msg || 'Token验证失败')
        storage.clearItem(TOKEN_KEY)
        window.location.replace('/login')
        return Promise.reject(msg)
    } else {
        message.error(msg || '异常').then(r => {})
        return Promise.reject(msg || '异常')
    }
})

const request = (options: AxiosRequestConfig): Promise<any>=> {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    return service(options)
}

export default request
