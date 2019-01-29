const {
  Schema
} = require("./config")

const CategorySchema = new Schema({
  name: { type: String },
  desc: { type: String,  default: '暂无描述' },
  createTime: { type: Date },
  updateTime: { type: Date, default: Date.now }
}, {
  versionKey: false
})
module.exports = CategorySchema
