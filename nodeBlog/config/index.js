const { mongoose } = require('mongoose')
const url = 'mongodb://175.178.115.221:27017'
const dbName = 'yorenzBlogDataBase'
const ObjectID = mongoose.Types.ObjectId

module.exports = {
  url,
  dbName,
  ObjectID,
}
