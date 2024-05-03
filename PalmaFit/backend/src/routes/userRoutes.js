const express = require('express');
const router = express.Router();
const userController = require('../../backend/controllers/userController');

// Rutas para gestionar usuarios
router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;