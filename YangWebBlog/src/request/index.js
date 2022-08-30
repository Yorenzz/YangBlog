import axios from 'axios'
const request=axios.create({
    baseURL: 'http://175.178.115.221:8080/',
    timeout:30000
})
export default request