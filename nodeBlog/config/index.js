const { mongoose } = require('mongoose')
const url = 'mongodb://yang:054532yez@175.178.115.221:27017'
const dbName = 'yorenz'
const ObjectID = mongoose.Types.ObjectId

module.exports = {
  url,
  dbName,
  ObjectID,
}
