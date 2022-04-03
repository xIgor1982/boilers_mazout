const Route = require('express')
const router = new Route()

const roleController = require('../controllers/role.controller')

router.post('/role', roleController.create)
router.get('/role', roleController.getAll)
router.get('/role/:id', roleController.getOne)
router.put('/role', roleController.update)
router.delete('/role/:id', roleController.delete)

module.exports = router
