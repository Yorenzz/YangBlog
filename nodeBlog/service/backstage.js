const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')

const getCommentNum = async () => {
  return ArticleModel.count()
}

const getAllLabel = async () => {
  return LabelModel.find()
}

module.exports = {
  getCommentNum,
  getAllLabel,
}