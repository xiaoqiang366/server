const { db } = require('../schema/config')

const TableSchema = require('../schema/table')
const Table = db.model("tables", TableSchema)

module.exports = Table