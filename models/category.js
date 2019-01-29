const { db } = require('../schema/config')

const CategorySchema = require('../schema/category')
const Category = db.model("category", CategorySchema)

module.exports = Category