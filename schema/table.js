const {
  Schema
} = require("./config")

const TableSchema = new Schema({
  num: { type: Number }
}, {
    versionKey: false
  })
module.exports = TableSchema
