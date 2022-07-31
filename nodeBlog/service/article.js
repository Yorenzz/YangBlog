const { ObjectID }= require("../config");
const { SuccessModel,ErrorModel }=require('../model/resModel')
const ArticleModel=require('../dbModel/ArticleModel')
async function insertArticle(text){
    text.readtime=0
    text.top=0
    try{
        const res1=await ArticleModel.create(text)
        return new SuccessModel(res1)
    }catch (e){
        return new ErrorModel(e)
    }
}

async function getText(msg,pageSize,currentPage){
    try{
        const res=await ArticleModel.find().limit(pageSize).skip((currentPage-1)*pageSize)
        return new SuccessModel(res)
    }catch (e){
        return new ErrorModel(e)
    }
}

async function getArticleById(ID){
    try{
        const res=await ArticleModel.find({_id:new ObjectID(ID)})
        console.log('id', res)
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