const express = require('express');
const  asyncHandler = require('../middleware/async');
const userController = require('../controllers/user');

const UserController = new userController()
const router = express.Router()

router.post('/createEmp',asyncHandler(UserController.createEmp));
router.get('/getUserList',asyncHandler(UserController.usersList));
router.put('/updateUser',asyncHandler(UserController.updateUser));
router.delete('/deleteUser/:id',asyncHandler(UserController.deleteUser));

module.exports = router;                            
