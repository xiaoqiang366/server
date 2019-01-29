const { db } = require('../schema/config')

const MenuSchema = require('../schema/menu')
const Menu = db.model("menus", MenuSchema)

module.exports = Menu
