const {MongoClient} = require('mongodb')
const {ObjectId}=require('mongodb')
const url='mongodb://localhost:27017'
const dbName='testBlog'

const conn= MongoClient.connect(url)


module.exports = {
    conn,
    dbName,
    ObjectId
}
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     const dbase = db.db(dbName);
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// })
