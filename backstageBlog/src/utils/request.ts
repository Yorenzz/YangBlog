import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config, { TOKEN_KEY } from '../config/index.js'
import { message } from 'antd'
import { RequestInterface, Result } from '../typing/request.js'
import storage from './storage.js'
import { useAppDispatch, useAppSelector } from './hooks'

// const username = useAppSelector((state) => state.userInfo.username)
// const role = useAppSelector((state) => state.userInfo.role)
const service = axios.create({
	baseURL: config.baseApi,
	timeout: 8000,
})
// const navigate = useNavigate()
service.interceptors.request.use(req => {
	if(req && req.headers) {
		const headers = req.headers
		const token = storage.getItem(TOKEN_KEY)
		// @ts-ignore
		if (!headers.Authorization) {
			// @ts-ignore
			headers.Authorization = `Bearer ${token}`
		}
	}
	return req
})

service.interceptors.response.use((res: AxiosResponse<Result>) => {
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

const request = (options: AxiosRequestConfig, operate?: boolean): Promise<any> => {
	options.method = options.method || 'get'
	if (options.method.toLowerCase() === 'get') {
		options.params = options.data
	}
	// @ts-ignore
	if(operate && window.role === 'visitor') {
		message.error('演示模式禁止操作').then(r => {})
		return new Promise((resolve, reject) => {
			reject('演示模式禁止操作')
		})
	}
	return service(options)
}

export default request
