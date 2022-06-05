import request from "../utils/request"

export function getText(message){
    return request({
        url: '/publictext/getText',
        method: 'POST',
        data: message
    })
}
