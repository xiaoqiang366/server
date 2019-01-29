const { db } = require('../Schema/config')

const MenuSchema = require('../Schema/menu')
const Menu = db.model("menus", MenuSchema)

module.exports = Menu
