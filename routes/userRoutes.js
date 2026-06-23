const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const { validateUser, validateUpdate } = require('../middleware/validate.js')

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserbyId);
router.post('/', validateUser, userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', validateUpdate, userController.updateUsername);

module.exports = router;