import request from "../request"

export function getText(message){
    return request({
        url: '/publictext/getText',
        method: 'POST',
        data: message
    })
}

export function getArticleById(ID){
    return request({
        url: '/publictext/getArticleById',
        method: 'GET',
        params: {ID}
    })
}

export function getIP(){
    return request({
        url: '/publictext/getIP',
        method: 'GET'
    })
}