const getList=(author,keyword)=>{
    //先返回假数据
    return [
        {
            id:1,
            title:'标题a',
            content: '内容A',
            createTime: 1636886226364,
            author: 'yang'
        },
        {
            id:2,
            title:'标题b',
            content: '内容b',
            createTime: 1636886226365,
            author: 'yangEzzz'
        }
    ]
}

module.exports={
    getList
}
