const {conn,dbName}= require("../db");
const {SuccessModel,ErrorModel}=require('../model/resModel')
async function insertArticle(text){
    text.readtime=0
    text.top=0
    try{
        const dbCollection = (await conn).db(dbName).collection("article")
        let res=await dbCollection.insertOne(text)
        console.log('res',res)
        return new SuccessModel(res)
    }catch (e){
        // console.log('err',e)
        return new ErrorModel(e)
    }
}

module.exports={
    insertArticle
}