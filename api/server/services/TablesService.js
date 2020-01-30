import database from '../src/models'

class TablesService {
  static async getAllTables() {
    try {
      return await database.Tables.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addTables(newTables) {
    try {
      return await database.Tables.create(newTables)
    } catch (error) {
      throw error
    }
  }

  static async updateTables(id, updateTables) {
    try {
      const tablesToUpdate = await database.Tables.findOne({
        where: { id: Number(id) }
      })

      if (TablesToUpdate) {
        await database.Tables.update(updateTables, { where: { id: Number(id) } })

        return updateTables
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getTables(id) {
    try {
      const theTables = await database.Tables.findOne({
        where: { id: Number(id) }
      })

      return theTables
    } catch (error) {
      throw error
    }
  }

  static async deleteTables(id) {
    try {
      const tablesToDelete = await database.Tables.findOne({ where: { id: Number(id) } })

      if (TablesToDelete) {
        const deletedTables = await database.Tables.destroy({
          where: { id: Number(id) }
        })
        return deletedTables
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default TablesService