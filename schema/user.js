const { Schema } = require("./config");
const { imagePath } = require('../Config/config');
const UserSchema = new Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: 1
  },
  avatar: {
    type: String,
    default: `${imagePath}/avatar/default.jpg`
  }
}, { versionKey: false })

module.exports = UserSchema
