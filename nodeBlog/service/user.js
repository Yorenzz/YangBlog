const {conn,dbName}= require("../db");

async function dataOperate() {
    try {
        const test = (await conn).db(dbName).collection("site");
        // 增加
        // await test.insertOne({ "site": "runoob.com" });
        // // 查询
        // let arr = await test.find().toArray();
        // console.log(arr);
        // 更改
        await test.updateMany({ "site": "runoob.com" },
            { $set: { "site": "example.com" } });
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
    } finally {
        if (conn != null) await (await conn).close();
    }
}

module.exports = {
    dataOperate
}
