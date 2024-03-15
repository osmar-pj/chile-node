import Router from 'express'

const router = Router()

import * as testController from '../controllers/test.controller.js'

router.get('/test', testController.getTests)
router.post('/test', testController.createTest)
router.put('/test/:id', testController.updateTest)
router.delete('/test/:id', testController.deleteTest)

export default router