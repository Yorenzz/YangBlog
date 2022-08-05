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

export function getIP() {
  return request({
    url: '/publictext/getIP',
    method: 'GET',
  })
}

export function getArticleByCategory(category) {
  return request({
    url: '/publictext/getArticleByCategory',
    method: 'GET',
    params: { category },
  })
}
