const { ObjectID } = require('../config')
const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const DynamicModel = require('../dbModel/DynamicModel')
const insertArticle = (text) => {
  text.readtime = 0
  text.top = 0
  if (!text._id) {
    return ArticleModel.create(text)
  } else {
    console.log(text)
    return ArticleModel.updateOne({ _id: text._id }, text)
  }
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
  return ArticleModel.find({ category })
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
    { value },
    {
      $setOnInsert: {
        value,
        color,
      },
    },
    { upsert: true },
  )
}

const getDynamic = () => {
  return DynamicModel.find()
}

const getArticleData = (category) => {
  return ArticleModel.find({ }, {
    text: 0,
    describe: 0,
    label: 0,
    img: 0,
    num: 0,
    readtime: 0,
  })
}

const getArticle = (id) => {
  return ArticleModel.find({ _id: id })
}

const deleteArticle = (id) => {
  return ArticleModel.deleteOne({ _id: id })
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
  getArticleData,
  getArticle,
  deleteArticle,
}
