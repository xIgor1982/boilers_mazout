const Route = require('express')
const router = new Route()

const manyRoleController = require('../controllers/many_role.controllers')

router.post('/manyrole', manyRoleController.create)
router.get('/manyrole', manyRoleController.getAll)
router.get('/manyrole/:id', manyRoleController.getOne)
router.put('/manyrole', manyRoleController.update)
router.delete('/manyrole/:id', manyRoleController.delete)

module.exports = router
