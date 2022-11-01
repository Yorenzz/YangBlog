const { ObjectID } = require('../config')
const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const DynamicModel = require('../dbModel/DynamicModel')
const insertArticle = (text) => {
  text.readtime = 0
  text.top = 0
  return ArticleModel.create(text)
}

const getText = (pageSize, currentPage) => {
  return ArticleModel.find().limit(pageSize).skip((currentPage - 1) * pageSize)
}

const getArticleById = (ID) => {
  return ArticleModel.find({ _id: new ObjectID(ID) })
}

const getArticleByTag = (tag) => {
  return ArticleModel.find({ label: tag })
}

const getArticleByCategory = (category) => {
  return ArticleModel.find({ category: category })
}

const getTotalBlogNum = () => {
  return ArticleModel.count()
}

const getAllTags = () => {
  return LabelModel.find()
}

const getTagsColor = (tagName) => {
  return LabelModel.findOne(
      { value: tagName },
      { color: 1, _id: 0 },
    )
}

const setLabelColor = (value, color) => {
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

const getDynamic = () => {
  return DynamicModel.find()
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
  getDynamic,
}
