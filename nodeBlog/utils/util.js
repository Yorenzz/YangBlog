/**
 * 通用工具函数
 */

const CODE  = {
    SUCCESS: 200,
    PARAM_ERROR: 10001, // 参数错误
    USER_ACCOUNT_ERROR: 20001, //账号或密码错误
    USER_LOGIN_ERROR: 30001, // 用户未登录
    BUSINESS_ERROR: 500001, //业务请求失败
    AUTH_ERROR: 40001, // 认证失败或TOKEN过期
}

const replaceNumberByIndex = (str, index, char) => {
    const strArr = (str+'').split('')
    strArr[index] = char
    return parseInt(strArr.join(''))
}

module.exports = {
    /**
     * 分页结构封装
     * @param {number} pageNum
     * @param {number} pageSize
     */
    pager({pageNum=1,pageSize=10}){
        pageNum*=1;
        pageSize*=1;
        const skipIndex = (pageNum-1)*pageSize;
        return {
            page:{
                pageNum,
                pageSize
            },
            skipIndex
        }
    },
    success(data='',msg='',code=CODE.SUCCESS){
        // log4js.debug(data);
        return {
            code,data,msg
        }
    },
    fail(msg='',data='',code=CODE.BUSINESS_ERROR){
        return {
            code,data,msg
        }
    },
    CODE,
    replaceNumberByIndex
}
