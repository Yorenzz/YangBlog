const mongoose = require('mongoose')
const { Schema, model } = mongoose

const articleSchema = new Schema(
  {
    category: {
      type: String,
      require: true,
    },
    describe: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    label: {
      type: Array,
      require: true,
    },
    num: {
      type: Number,
      require: true,
    },
    readtime: {
      type: Number,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    top: {
      type: String,
      require: true,
    },
  },
  { versionKey: false },
)

module.exports = model('article', articleSchema, 'article')
