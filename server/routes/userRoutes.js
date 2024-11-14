// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createUserApi', userController.createUser);
router.get('/getUsersApi', userController.getUsers);
router.get('/getUserByIdApi/:id', userController.getUserById);
router.put('/updateUserApi/:id', userController.updateUser);
router.delete('/deleteUserApi/:id', userController.deleteUser);
router.get('/test',userController.getTest);
module.exports = router;