const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const getCommentNum = async () => {
    try {
        const res = await ArticleModel.count()
        return res
    } catch (e) {
        return e
    }
  }

  module.exports = {
    getCommentNum,
  }