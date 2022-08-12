const mongoose = require('mongoose')
const { Schema, model } = mongoose

const labelSchema = new Schema(
  {
    value: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
  },
  { versionKey: false },
)

module.exports = model('label', labelSchema, 'label')
