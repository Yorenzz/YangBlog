const { ObjectID } = require('../config')
const UserModel = require('../dbModel/UserModel')

async function userCheck (username, password) {
  return UserModel.find({ uname: username })
}

module.exports = { userCheck }
