const Route = require('express')
const router = new Route()

const CountController = require('../controllers/counter.controller')

router.post('/counter', CountController.create)
router.get('/counter', CountController.get)
router.get('/counter/:id', CountController.getByIdKot)
router.put('/counter', CountController.update)
router.delete('/counter/:id', CountController.delete)

module.exports = router
