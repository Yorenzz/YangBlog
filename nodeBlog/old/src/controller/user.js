const { dataOperate } = require('../../service/user')
const login = (username, password) => {
  if (username === 'yang' && password === '123') {
    dataOperate(username, password)
    return true
  } else {
    return false
  }
}
module.exports = { login }
