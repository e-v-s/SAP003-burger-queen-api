// import OrdersService from '../services/OrdersService'
// import Util from '../utils/Utils'

const TablesService = require('../services/TablesService')
const Util = require('../utils/Utils')

const util = new Util()

class TablesController {
  static async getAllTables(req, res) {
    try {
      const allTables = await TablesService.getAllTables()
      if (allTables.length > 0) {
        util.setSuccess(200, 'Tables retrieved', allTables)
      } else {
        util.setSuccess(200, 'No Table found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addTables(req, res) {
    console.log(req.body.clientName, req.body.tableNumber)
    if (!req.body.clientName || !req.body.tableNumber ) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newTables = req.body
    try {
      const createdTables = await TableService.addTables(newTables)
      util.setSuccess(201, 'Table Added!', createdTables)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedTables(req, res) {
    const alteredTables = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateTables = await TablesService.updateTables(id, alteredTables)
      if (!updateTables) {
        util.setError(404, `Cannot find Table with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Table updated', updateTables)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getTables(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theTables = await TablesService.getTables(id)

      if (!theTables) {
        util.setError(404, `Cannot find Table with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Table', theTables)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteTables(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const tablesToDelete = await TablesService.deleteTables(id)

      if (tablesToDelete) {
        util.setSuccess(200, 'Table deleted')
      } else {
        util.setError(404, `Table with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default TablesController;