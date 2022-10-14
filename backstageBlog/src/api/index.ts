import request from "../utils/request";
import { ArticleType } from '../typing/article'

// export function loginIn(message){
//     return request({
//         url: '/users/login',
//         method: 'POST',
//         data: message
//     })
// }

export function sendArticle(message: ArticleType){
    return request({
        url: '/article/send',
        method: 'POST',
        data: message
    })
}

// export function setLabelColor(message){
//     return request({
//         url: '/article/setLabelColor',
//         method: 'POST',
//         data: message
//     })
// }
//
export function getAllTags(){
    return request({
        url: '/publictext/getAllTags',
        method: 'GET',
    })
}

export function getAllLabel(){
    return request({
        url: '/article/getAllLabel',
        method: 'GET',
    })
}

export function getCommentNum(){
    return request({
        url: '/article/getCommentNum',
        method: 'GET',
    })
}
//
//
// export function verify(token){
//     return request({
//         url:'/users/verify',
//         method: 'GET',
//         data: token
//     })
// }
