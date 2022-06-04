const Route = require('express')
const router = new Route()

const regControllers = require('../controllers/registers.routes')

router.post('/registers', regControllers.create)
router.get('/registers', regControllers.getAll)
router.get('/registers/:id', regControllers.getOne)
router.put('/registers', regControllers.update)
router.delete('/registers/:id', regControllers.delete)

module.exports = router
