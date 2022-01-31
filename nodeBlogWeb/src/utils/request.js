import axios from 'axios'
import {handleUserResponse} from "./routeValidate";
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
    let token = response.data?.jwt
    // console.log(token)
    if (token) {
        handleUserResponse(token)
    }
    return response;
},error => {
    console.log(error) // for debug
    return Promise.reject(error)
});

export default request
