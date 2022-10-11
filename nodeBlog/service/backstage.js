const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const getCommentNum = async () => {
  return ArticleModel.count()
}

module.exports = {
  getCommentNum,
}