const {conn,dbName,ObjectId}= require("../db");
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

async function getText(msg,pageSize,currentPage){
    try{
        const dbCollection = (await conn).db(dbName).collection("article")
        let res=await dbCollection.find().limit(pageSize).skip((currentPage-1)*pageSize).toArray()
        // console.log('get',res)
        return new SuccessModel(res)
    }catch (e){
        return new ErrorModel(e)
    }
}

async function getArticleById(ID){
    try{
        const dbCollection = (await conn).db(dbName).collection("article")
        let res = await dbCollection.find({_id:new ObjectId(ID)}).toArray()
        console.log('db', res)
        return new SuccessModel(res)
    }catch (e){
        return new ErrorModel(e)
    }
}

module.exports={
    insertArticle,
    getText,
    getArticleById
}