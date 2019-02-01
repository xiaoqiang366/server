const { db } = require('../schema/config');
const ImageSchema = require('../schema/image');

module.exports = db.model("image", ImageSchema);
