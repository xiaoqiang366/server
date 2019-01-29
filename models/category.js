const { db } = require('../Schema/config')

const CategorySchema = require('../Schema/category')
const Category = db.model("category", CategorySchema)

module.exports = Category