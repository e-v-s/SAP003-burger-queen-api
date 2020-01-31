//import { Router } from 'express'
//import ProductsController from '../controllers/ProductsController'

const ProductsController =  require('../controllers/ProductsController')

const router = require('Router')
router.get('/', ProductsController.getAllProducts)
router.post('/', ProductsController.addProducts)
router.get('/:id', ProductsController.getProducts)
router.put('/:id', ProductsController.updatedProducts)
router.delete('/:id', ProductsController.deleteProducts)
module.exports = router