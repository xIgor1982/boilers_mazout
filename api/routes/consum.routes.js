const Route = require('express')
const router = new Route()

const consumControllers = require('../controllers/consum.controllers')

router.post('/consum', consumControllers.create)
router.get('/consum', consumControllers.getAll)
router.get('/consum/:id', consumControllers.getOne)
router.put('/consum', consumControllers.update)
router.delete('/consum/:id', consumControllers.delete)

module.exports = router
