const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    uname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = model("user", userSchema, "user")