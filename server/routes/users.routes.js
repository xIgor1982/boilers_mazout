const Route = require('express')
const router = new Route()

const usersControllers = require('../controllers/users.controllers')

router.post('/users', usersControllers.create)
router.get('/users', usersControllers.getAll)
router.get('/users/:id', usersControllers.getOne)
router.put('/users', usersControllers.update)
router.delete('/users/:id', usersControllers.delete)

module.exports = router
