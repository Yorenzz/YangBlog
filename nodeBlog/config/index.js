const {mongoose}=require('mongoose')
const url='mongodb://localhost:27017'
const dbName='testBlog'
const ObjectID=mongoose.Types.ObjectId

module.exports = {
    url,
    dbName,
    ObjectID
}
