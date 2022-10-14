const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const { ObjectID } = require('../config')
const getCommentNum = async () => {
  return ArticleModel.count()
}

const getAllLabel = async () => {
  return LabelModel.find()
}

const updateLabel=async (id, name, color)=>{
  return LabelModel.updateOne({_id: new ObjectID(id)},{$set:{"value":name, "color": color}})
}

module.exports = {
  getCommentNum,
  getAllLabel,
  updateLabel
}
