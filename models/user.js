const { db } = require('../Schema/config');
const UserSchema = require('../Schema/user');

module.exports = db.model("users", UserSchema);
