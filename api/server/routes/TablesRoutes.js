import { Router } from 'express'
import TablesController from '../controllers/TablesController'

const router = require('Router')
router.get('/', TablesController.getAllTables)
router.post('/', TablesController.addTables)
router.get('/:id', TablesController.getTables)
router.put('/:id', TablesController.updatedTables)
router.delete('/:id', TablesController.deleteTables)
export default router