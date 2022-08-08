const { mongoose } = require('mongoose')
const url = 'mongodb://yorenz:password@175.178.115.221:27017'
const dbName = 'yorenzblog'
const ObjectID = mongoose.Types.ObjectId

module.exports = {
  url,
  dbName,
  ObjectID,
}
