const Router = require('express')
const router = new Router()

const kotController = require('../controllers/kotelnaya.controllers')

router.post('/kotelnaya', kotController.create)
router.get('/kotelnaya', kotController.get)
router.get('/kotelnaya/:id', kotController.getOne)
router.put('/kotelnaya', kotController.update)
router.delete('/kotelnaya/:id', kotController.delete)

module.exports = router
