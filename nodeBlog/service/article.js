const { ObjectID } = require('../config')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const insertArticle = async (text) => {
  text.readtime = 0
  text.top = 0
  return ArticleModel.create(text)
}

const getText = async (pageSize, currentPage) => {
  return ArticleModel.find().limit(pageSize).skip((currentPage - 1) * pageSize)
}

const getArticleById = async (ID) => {
  return ArticleModel.find({ _id: new ObjectID(ID) })
}

const getArticleByTag = async (tag) => {
  return ArticleModel.find({ label: tag })
}

const getArticleByCategory = async (category) => {
  return ArticleModel.find({ category: category })
}

const getTotalBlogNum = async () => {
  return ArticleModel.count()
}

const getAllTags = async () => {
  return LabelModel.find()
}

const getTagsColor = async (tagName) => {
  return LabelModel.findOne(
      { value: tagName },
      { color: 1, _id: 0 },
    )
}

const setLabelColor = async (value, color) => {
    return LabelModel.findOneAndUpdate(
      { value: value },
      {
        $setOnInsert: {
          value: value,
          color: color,
        },
      },
      {
        upsert: true,
      },
    )
}

module.exports = {
  insertArticle,
  getText,
  getArticleById,
  getArticleByCategory,
  getArticleByTag,
  getTotalBlogNum,
  getAllTags,
  getTagsColor,
  setLabelColor,
}
