const { ObjectID }= require("../config");
const UserModel=require("../dbModel/UserModel")

async function userCheck(username,password){
    return UserModel.find({"uname":username})
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