const Route = require('express');
const router = new Route();

const registersController = require('../controller/registers.controller.js');

router.post('/registers', registersController.createRegisters);
router.get('/registers', registersController.getRegisters);
router.get('/registers/:id', registersController.getOneRegisters);
router.put('/registers', registersController.updateRegisters);
router.delete('/registers/:id', registersController.deleteRegisters);

module.exports = router;
