// import OrdersService from '../services/OrdersService'
// import Util from '../utils/Utils'

const OrdersService = require('../services/OrdersService')
const Util = require('../utils/Utils')

const util = new Util()

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductsService.getAllProducts()
      if (allProducts.length > 0) {
        util.setSuccess(200, 'Products retrieved', allProducts)
      } else {
        util.setSuccess(200, 'No Product found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addProducts(req, res) {
    console.log(req.body.name, req.body.category, req.body.value)
    if (!req.body.name || !req.body.category || !req.body.value) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newProducts = req.body
    try {
      const createdProducts = await ProductsService.addProducts(newProducts)
      util.setSuccess(201, 'Product Added!', createdProducts)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedProducts(req, res) {
    const alteredProducts = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateProducts = await ProductsService.updateProducts(id, alteredProducts)
      if (!updateProducts) {
        util.setError(404, `Cannot find Product with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Product updated', updateProducts)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getProducts(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theProducts = await ProductsService.getProducts(id)

      if (!theProducts) {
        util.setError(404, `Cannot find Product with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Product', theProducts)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteProducts(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const productsToDelete = await ProductsService.deleteProducts(id)

      if (productsToDelete) {
        util.setSuccess(200, 'Product deleted')
      } else {
        util.setError(404, `Product with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default ProductsController;