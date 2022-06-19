const Router = require('express')
const router = new Router()

const statusController = require('../controllers/status.controller')

router.get('/status', statusController.get)
router.get('/status/:id', statusController.getOne)

module.exports = router
