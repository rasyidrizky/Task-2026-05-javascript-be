const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const validateUser = require('../middleware/validate.js')

router.get('/', userController.getAllUsers);
router.post('/', validateUser, userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUsername);

module.exports = router;