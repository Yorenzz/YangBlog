import request, { mock } from '../request'

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
    data: { ID },
  })
}

export function getArticleByCategory(category) {
  return request({
    url: '/publictext/getArticleByCategory',
    method: 'GET',
    data: { category },
  })
}

export function getArticleByTag(tag) {
  return request({
    url: '/publictext/getArticleByTag',
    method: 'GET',
    data: { tag },
  })
}

export function getTotalBlogNum() {
  return request({
    url: '/publictext/getTotalBlogNum',
    data: 'GET',
  })
}

export function getBingPic() {
  return request({
    url: '/tool/getBingPicture',
    data: 'GET',
  })
}

export function getAllTags() {
  return request({
    url: '/publictext/getAllTags',
    method: 'GET',
  })
}

export function getTagsColor(tagName) {
  return request({
    url: '/publictext/getTagsColor',
    method: 'GET',
    data: { tagName },
  })
}

export function getIP(ip) {
  return request({
    url: '/publictext/getIP',
    method: 'GET',
    data: { ip },
  })
}

export function getHistoryToday() {
  return mock({
    url: '/tool/today',
    method: 'GET',
  })
  // https://api.oick.cn/lishi/api.php
}

export function getSentence() {
  return mock({
    url: '/tool/sentence',
    method: 'GET',
  })
  // https://v1.hitokoto.cn/?c=a
}
