const Route = require('express');
const router = new Route();

const ManyRoleController = require('../controller/many_role.controller.js');

router.post('/manyrole', ManyRoleController.createManyRole);
router.get('/manyrole', ManyRoleController.getManyRole);
router.get('/manyrole/:id', ManyRoleController.getOneManyRole);
router.put('/manyrole', ManyRoleController.updateManyRole);
router.delete('/manyrole/:id', ManyRoleController.deleteManyRole);

module.exports = router;
