const Router = require('express')
const router = new Router()

const workController = require('../controllers/working.controllers')

router.post('/working', workController.create)
router.get('/working', workController.get)
router.get('/working/:id', workController.getOne)
router.put('/working', workController.update)
router.delete('/working/:id', workController.delete)

module.exports = router
