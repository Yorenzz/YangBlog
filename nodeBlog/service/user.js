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
        // // 查询
        // arr = await test.find().toArray();
        // console.log(arr);
        // // 删除
        // await test.deleteMany({ "site": "example.com" });
        // // 查询
        // arr = await test.find().toArray();
        // console.log(arr);
    } catch (err) {
        console.log("错误：" + err.message);
    }

}

async function userInfo(userMessage){
    try {
        const test = (await conn).db(dbName).collection("user");
        let userResult = await test.find().toArray()
        console.log(userResult)
    } catch {

    }
}

module.exports = {
    dataOperate
}
