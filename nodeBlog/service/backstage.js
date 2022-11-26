const ArticleModel = require('../dbModel/ArticleModel')
const LabelModel = require('../dbModel/LabelModel')
const DynamicModel = require('../dbModel/DynamicModel')
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

const deleteLabel=async (id)=>{
  return LabelModel.deleteOne({_id: new ObjectID(id)})
}

const getTextCountByCategory=async ()=>{
  return ArticleModel.aggregate([{$group: {_id: "$category", total: {$sum: 1}}}])
}

const insertContext = async (context)=>{
  console.log(context)
  return DynamicModel.create(context)
}

// const getTextCountByLabel=async ()=>{
//   return ArticleModel.aggregate([{$group: {_id: "$label", total: {$sum: 1}}}])
// }

module.exports = {
  getCommentNum,
  getAllLabel,
  updateLabel,
  deleteLabel,
  getTextCountByCategory,
  insertContext
}
