const {conn,dbName}= require("../db");

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

async function userCheck(userMessage){
    try {
        const test = (await conn).db(dbName).collection("user");
        let userResult = await test.find({"uname":"yang"}).toArray()
        console.log(userResult)
        return userResult[0]
    } catch {
        console.log("错误：" + err.message);
    }
}

module.exports = {
    dataOperate,
    userCheck
}
