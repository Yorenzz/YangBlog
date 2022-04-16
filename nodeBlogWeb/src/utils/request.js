import axios from 'axios'
import {message} from "antd"
import {handleUserResponse, logout} from "./routeValidate";

const request=axios.create({
    baseURL: 'http://localhost:8080/',
    timeout:30000
})

request.interceptors.request.use(
    config => {
        if (localStorage.getItem('Token')) {
            //console.log('localToken',localStorage.getItem('Token'))
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('Token')}`
            //console.log('header', config.headers)
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

request.interceptors.response.use((response) => {
    console.log('res:request',response)
    let token = response.data?.jwt
    // console.log(token)
    if (token) {
        handleUserResponse(token)
    }
    return response;
},err => {
     // for debug
    if (err.response.status === 401&&err.response.config.url!=='/users/verify'){
        console.log('err1',err.response.config.url)
        message.error('Token已失效，请重新登录')
        console.log('err2',err.response)
        logout()
        window.location.hash="/"
    }
    return Promise.reject(err)
});

export default request
