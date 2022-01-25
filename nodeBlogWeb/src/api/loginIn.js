import axios from 'axios'
const http=axios.create({
    baseURL: 'http://localhost:8000/',
    timeout:30000
})
export function loginIn(message){
    return http({
        url: 'api/user/login',
        method: 'POST',
        data: message
    })
}
