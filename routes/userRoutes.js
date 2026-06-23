const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/user', userController.getAllUsers);
router.post('/user', valudateUser, userController.createUser);

module.exports = router;