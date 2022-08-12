import request from '../request'

export function getText(message) {
  return request({
    url: '/publictext/getText',
    method: 'POST',
    data: message,
  })
}

export function getArticleById(ID) {
  return request({
    url: '/publictext/getArticleById',
    method: 'GET',
    params: { ID },
  })
}

export function getArticleByCategory(category) {
  return request({
    url: '/publictext/getArticleByCategory',
    method: 'GET',
    params: { category },
  })
}

export function getArticleByTag(tag) {
  return request({
    url: '/publictext/getArticleByTag',
    method: 'GET',
    params: { tag },
  })
}

export function getTotalBlogNum() {
  return request({
    url: '/publictext/getTotalBlogNum',
    method: 'GET',
  })
}

export function getBingPic(){
  return request({
    url: '/tool/getBingPicture',
    method: 'GET',
  })
}

export function getAllTags(){
  return request({
    url: '/publictext/getAllTags',
    method: 'GET',
  })
}

export function getTagsColor(tagName){
  return request({
    url: '/publictext/getTagsColor',
    method: 'GET',
    params: { tagName },
  })
}
