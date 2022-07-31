const { ObjectID }= require("../config");
const {SuccessModel, ErrorModel} = require("../model/resModel");
const UserModel=require("../dbModel/UserModel")

async function userCheck(username,password){
    try {
        const userRes=await UserModel.find({"uname":username})
        if(userRes[0]===undefined)
            return new ErrorModel('找不到该用户')
        else if(userRes[0].password===password)
            return new SuccessModel(userRes[0])
        else
            return new ErrorModel('密码错误')
    } catch (e){
        return new ErrorModel(e)
    }
}

module.exports = {
    userCheck
}

// async function dataOperate(username,password) {
//     try {
//         const test = (await conn).db(dbName).collection("site");
//         //增加
//         await test.insertOne({ "username": username,"password": password });
//         // // 查询
//         // let arr = await test.find().toArray();
//         // console.log(arr);
//         // 更改
//         // await test.updateMany({ "site": "example.com" },
//         //     { $set: { "site": "test.com" } });
//         // // 删除
//         // await test.deleteMany({ "site": "example.com" });
//     } catch (err) {
//         console.log("错误：" + err.message);
//     }
// }