const { db } = require('../schema/config');
const UserSchema = require('../schema/user');

module.exports = db.model("users", UserSchema);
