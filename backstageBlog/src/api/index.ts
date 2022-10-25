import request from "../utils/request";
import { ArticleType } from '../typing/article'

export function loginIn(username: string, password: string){
    return request({
        url: '/users/login',
        method: 'POST',
        data: {username, password}
    })
}

export function sendArticle(message: ArticleType){
    return request({
        url: '/article/send',
        method: 'POST',
        data: message
    })
}

export function updateLabel(id: string, value: string, color: string | undefined){
    return request({
        url: '/article/updateLabel',
        method: 'POST',
        data: {id, value, color}
    })
}

export function deleteLabel(id: string){
    return request({
        url: '/article/deleteLabel',
        method: 'POST',
        data: {id}
    })
}

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
