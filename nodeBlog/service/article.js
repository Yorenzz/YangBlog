const { ObjectID } = require('../config')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
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
    const res = await ArticleModel.find()
      .limit(pageSize)
      .skip((currentPage - 1) * pageSize)
    // console.log(res)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getArticleById = async (ID) => {
  try {
    const res = await ArticleModel.find({ _id: new ObjectID(ID) })
    // console.log('id', res)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getArticleByTag = async (tag) => {
  try {
    const res = await ArticleModel.find({ label: tag })
    // console.log('id', res)
    return new SuccessModel(res)
  } catch (e) {
    return new ErrorModel(e)
  }
}

const getArticleByCategory = async (category) => {
  try {
    const res = await ArticleModel.find({ category: category })
    // console.log('res', res)
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

const getAllTags = async () => {
  try {
    const res = await LabelModel.find()
    return new SuccessModel(res)
  }catch(e) {
    return new ErrorModel(e)
  }
}

const getTagsColor = async (tagName) => {
  try {
    const res = await LabelModel.findOne({ value: tagName }, { color:1, _id:0 })
    return new SuccessModel(res)
  }catch(e) {
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
  getAllTags,
  getTagsColor
}
