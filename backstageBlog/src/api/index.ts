import request from '../utils/request'
import { ArticleType } from '../typing/article'
import { DynamicContextType } from '../typing/dynamic'

export function loginIn(username: string, password: string) {
	return request({
		url: '/users/login',
		method: 'POST',
		data: {
			username,
			password,
		},
	})
}

export function sendArticle(message: ArticleType) {
	return request({
		url: '/article/send',
		method: 'POST',
		data: message,
	})
}

export function updateLabel(id: string, value: string, color: string | undefined) {
	return request({
		url: '/article/updateLabel',
		method: 'POST',
		data: {
			id,
			value,
			color,
		},
	})
}

export function deleteLabel(id: string) {
	return request({
		url: '/article/deleteLabel',
		method: 'POST',
		data: { id },
	})
}

export function getAllTags() {
	return request({
		url: '/publictext/getAllTags',
		method: 'GET',
	})
}

export function getAllLabel() {
	return request({
		url: '/article/getAllLabel',
		method: 'GET',
	})
}

export function getCommentNum() {
	return request({
		url: '/article/getCommentNum',
		method: 'GET',
	})
}

export function getTextPerCategory() {
	return request({
		url: '/article/getPerCategoryText',
		method: 'GET',
	})
}

export function sendContext(context: DynamicContextType) {
	return request({
		url: '/article/sendContext',
		method: 'POST',
		data: { context },
	})
}

export function getArticleData(category: String|undefined) {
	return request({
		url: '/article/getArticleData',
		method: 'get',
		data: { category },
	})
}

export function getArticle(id: String) {
	return request({
		url: '/article/getArticle',
		method: 'get',
		data: { id },
	})
}

export function deleteArticle(id: String) {
	return request({
		url: '/article/deleteArticle',
		method: 'get',
		data: { id },
	})
}

export function getRandomImage(type: String) {
	return request({
		url: '/tool/getRandomImage',
		method: 'GET',
		data: { type },
	})
}

export function getUploadToken() {
	return request({
		url: '/tool/uploadToken',
		method: 'GET',
	})
}

export function verify(token: string) {
	return request({
		url: '/users/verify',
		method: 'GET',
		data: { token },
	})
}
