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

const deleteLabel=async (id, name, color)=>{
  return LabelModel.deleteOne({_id: new ObjectID(id)})
}

module.exports = {
  getCommentNum,
  getAllLabel,
  updateLabel,
  deleteLabel
}
