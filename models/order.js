const { db } = require('../Schema/config')

const OrderSchema = require('../Schema/table')
const Order = db.model("tables", OrderSchema)

module.exports = Order