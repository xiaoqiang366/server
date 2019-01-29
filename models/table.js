const { db } = require('../schema/config')

const TableSchema = require('../Schema/table')
const Table = db.model("tables", TableSchema)

module.exports = Table