const { Schema } = require("./config");

module.exports = new Schema({
  name: String,
  group: String,
  url: String,
  createtime: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })
