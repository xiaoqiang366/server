const { db } = require('../schema/config');
const UserSchema = require('../Schema/user');

module.exports = db.model("users", UserSchema);
