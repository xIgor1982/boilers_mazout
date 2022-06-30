const Router = require('express')
const router = new Router()

const incidentController = require('../controllers/incident.controllers')

router.get('/incident', incidentController.get)

module.exports = router
