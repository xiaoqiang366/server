const { db } = require('../schema/config')

const MenuSchema = require('../Schema/menu')
const Menu = db.model("menus", MenuSchema)

module.exports = Menu
