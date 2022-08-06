const { ObjectID } = require('../config')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const ArticleModel = require('../dbModel/ArticleModel')
const insertArticle = async (text) => {
  text.readtime = 0
  text.top = 0
  try {
    const res1 = await ArticleModel.create(text)
    return new SuccessModel(res1)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getText = async (pageSize, currentPage) => {
  try {
    console.log('1', pageSize, currentPage)
    const res = await ArticleModel.find()
      .limit(pageSize)
      .skip((currentPage - 1) * pageSize)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getArticleById = async (ID) => {
  try {
    const res = await ArticleModel.find({ _id: new ObjectID(ID) })
    console.log('id', res)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getArticleByTag = async (tag) => {
  try {
    const res = await ArticleModel.find({ label: tag })
    console.log('id', res)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getArticleByCategory = async (category) => {
  try {
    const res = await ArticleModel.find({ category: category })
    console.log('res', res)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getTotalBlogNum = async () => {
  try {
    const res = await ArticleModel.count()
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

module.exports = {
  insertArticle,
  getText,
  getArticleById,
  getArticleByCategory,
  getArticleByTag,
  getTotalBlogNum,
}
