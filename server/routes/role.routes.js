const Route = require('express');
const router = new Route();

const RoleController = require('../controller/role.controller.js');

router.post('/role', RoleController.createRole);
router.get('/role', RoleController.getRole);
router.get('/role/:id', RoleController.getOneRole);
router.put('/role', RoleController.updateRole);
router.delete('/role/:id', RoleController.deleteRole);

module.exports = router;
