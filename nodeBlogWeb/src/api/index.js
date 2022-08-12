import request from "../utils/request";

export function loginIn(message){
    return request({
        url: '/users/login',
        method: 'POST',
        data: message
    })
}

export function sendArticle(message){
    return request({
        url: '/article/send',
        method: 'POST',
        data:message
    })
}

export function setLabelColor(message){
    return request({
        url: '/article/setLabelColor',
        method: 'POST',
        data: message
    })
}

export function getAllTags(){
    return request({
        url: '/publictext/getAllTags',
        method: 'GET',
    })
}

export function testaaa(message){
    return request({
        url: '/string',
        method: 'GET',
        data: message
    })
}

export function verify(token){
    return request({
        url:'/users/verify',
        method: 'GET',
        data: token
    })
}