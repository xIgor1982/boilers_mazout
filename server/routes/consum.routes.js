const Route = require('express');
const router = new Route();

const consumController = require('../controller/consum.controller.js');

router.post('/consum', consumController.createConsum);
router.get('/consum', consumController.getConsum);
router.get('/consum/:id', consumController.getOneConsumRegisters);
router.put('/consum', consumController.updateConsum);
router.delete('/consum/:id', consumController.deleteConsum);

module.exports = router;
