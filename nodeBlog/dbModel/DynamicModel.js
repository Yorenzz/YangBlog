const mongoose = require('mongoose')
const { Schema, model } = mongoose

const dynamicSchema = new Schema(
  {
    text: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    isSelf: {
      type: Boolean,
      require: true,
    },
    like: {
      type: Number,
      require: true,
    },
    watch: {
      type: Number,
      require: true,
    },
  },
  { versionKey: false },
)

module.exports = model('dynamic', dynamicSchema, 'dynamic')
