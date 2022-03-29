const Router = require('express');
const router = new Router();
const kotelnayaController = require('../controller/kotelnaya.controller.js');

router.post('/kotelnaya', kotelnayaController.createKotelnaya);
router.get('/kotelnaya', kotelnayaController.getKotelnaya);
router.get('/kotelnaya/:id', kotelnayaController.getOneKotelnaya);
router.put('/kotelnaya', kotelnayaController.updateKotelnaya);
router.delete('/kotelnaya/:id', kotelnayaController.deleteKotelnaya);

module.exports = router;
