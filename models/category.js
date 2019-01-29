const { db } = require('../schema/config')

const CategorySchema = require('../Schema/category')
const Category = db.model("category", CategorySchema)

module.exports = Category