//import database from '../src/models'

const database = require('../src/models')

class ProductsService {
  static async getAllProducts() {
    try {
      return await database.Products.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addProducts(newProducts) {
    try {
      return await database.Products.create(newProducts)
    } catch (error) {
      throw error
    }
  }

  static async updateProducts(id, updateProducts) {
    try {
      const productsToUpdate = await database.Products.findOne({
        where: { id: Number(id) }
      })

      if (ProductsToUpdate) {
        await database.Products.update(updateProducts, { where: { id: Number(id) } })

        return updateProducts
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProducts(id) {
    try {
      const theProducts = await database.Products.findOne({
        where: { id: Number(id) }
      })

      return theProducts
    } catch (error) {
      throw error
    }
  }

  static async deleteProducts(id) {
    try {
      const productsToDelete = await database.Products.findOne({ where: { id: Number(id) } })

      if (ProductsToDelete) {
        const deletedProducts = await database.Products.destroy({
          where: { id: Number(id) }
        })
        return deletedProducts
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProductsService