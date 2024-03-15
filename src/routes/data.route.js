import Router from 'express'

const router = Router()

import * as dataController from '../controllers/data.controller.js'

router.get('/data', dataController.getData)
router.post('/data', dataController.createData)

export default router