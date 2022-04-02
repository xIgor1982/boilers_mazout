const Route = require('express')
const router = new Route()

const dicdevisionControllers = require('../controllers/dicdevision.controllers')

router.post('/dicdevision', dicdevisionControllers.create)
router.get('/dicdevision', dicdevisionControllers.getAll)
router.get('/dicdevision/:id', dicdevisionControllers.getOne)
router.put('/dicdevision', dicdevisionControllers.update)
router.delete('/dicdevision/:id', dicdevisionControllers.delete)

module.exports = router
