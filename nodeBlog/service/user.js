const {conn,dbName}= require("../db");
const {SuccessModel, ErrorModel} = require("../model/resModel");

async function dataOperate(username,password) {
    try {
        const test = (await conn).db(dbName).collection("site");
        //增加
        await test.insertOne({ "username": username,"password": password });
        // // 查询
        // let arr = await test.find().toArray();
        // console.log(arr);
        // 更改
        // await test.updateMany({ "site": "example.com" },
        //     { $set: { "site": "test.com" } });
        // // 删除
        // await test.deleteMany({ "site": "example.com" });
    } catch (err) {
        console.log("错误：" + err.message);
    }
}

async function userCheck(username,password){
    try {
        const test = (await conn).db(dbName).collection("user");
        let userResult = await test.find({"uname":username}).toArray()
        //console.log('null',userResult[0].password,password,typeof userResult[0].password,typeof password)
        if(userResult[0]===undefined)
            return new ErrorModel('找不到该用户')
        else if(userResult[0].password===parseInt(password))
            return new SuccessModel(userResult[0])
        else
            return new ErrorModel('密码错误')
    } catch (e){
        //console.log("错误：" + e);
        return new ErrorModel(e)
    }
}

module.exports = {
    dataOperate,
    userCheck
}
