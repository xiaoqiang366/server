const { db } = require('../schema/config')

const OrderSchema = require('../schema/order')
const Order = db.model("orders", OrderSchema)

module.exports = Order