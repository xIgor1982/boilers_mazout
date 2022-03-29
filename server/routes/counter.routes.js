const Route = require('express');
const router = new Route();

const counterController = require('../controller/counter.controller.js');

router.post('/counter', counterController.createCounter);
router.get('/counter', counterController.getCounter);
router.get('/counter/:id', counterController.getOneCounterKotelnaya);
router.put('/counter', counterController.updateCounter);
router.delete('/counter/:id', counterController.deleteCounter);

module.exports = router;
