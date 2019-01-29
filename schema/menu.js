const {
  Schema
} = require("./config")
const ObjectId = Schema.Types.ObjectId

const MenuSchema = new Schema({
  name: String,
  cid: {
    type: ObjectId,
    ref: "categories"
  },
  price: String,
  desc: String,
  img: String,
  createTime: {
    type: Date
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
})


module.exports = MenuSchema
