const Route = require('express');
const router = new Route();

const usersController = require('../controller/users.controller.js');

router.post('/users', usersController.createUsers);
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getOneUsers);
router.put('/users', usersController.updateUsers);
router.delete('/users/:id', usersController.deleteUsers);

module.exports = router;
