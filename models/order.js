const { db } = require('../schema/config')

const OrderSchema = require('../schema/table')
const Order = db.model("tables", OrderSchema)

module.exports = Order