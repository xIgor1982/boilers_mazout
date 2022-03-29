const Route = require('express');
const router = new Route();

const DicdevisionController = require('../controller/dicdevision.controller.js');

router.post('/dicdevision', DicdevisionController.createDicdevision);
router.get('/dicdevision', DicdevisionController.getDicdevision);
router.get('/dicdevision/:id', DicdevisionController.getOneDicdevision);
router.put('/dicdevision', DicdevisionController.updateDicdevision);
router.delete('/dicdevision/:id', DicdevisionController.deleteDicdevision);

module.exports = router;
