const getList = (author, keyword) => {
    //先返回假数据
    return [
        {
            id: 1,
            title: '标题a',
            content: '内容A',
            createTime: 1636886226364,
            author: 'yang'
        },
        {
            id: 2,
            title: '标题b',
            content: '内容b',
            createTime: 1636886226365,
            author: 'yangEzzz'
        }
    ]
}

const getDetail = (id) => {
    return {
            id: 1,
            title: '标题a',
            content: '内容A',
            createTime: 1636886226364,
            author: 'yang'
        }
}

const newBlog=(blogData={})=>{
    console.log('blogData', blogData)
    return {
        id:3
    }
}

const updateBlog=(id,blogData={})=>{
    console.log('update',id,blogData)
    return true
}

const deleteBlog=(id)=>{
    console.log('id',id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}
