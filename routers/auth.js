const express = require('express');
const asyncHandler = require('../middleware/async');

const AuthController = require('../controllers/auth');
const authcontroller = new AuthController()
const router = express.Router()



//Authentication route
// const authRouter = require('../routers/auth')
router.post('/register',asyncHandler(authcontroller.registers))
router.post('/login',asyncHandler(authcontroller.login))


                                                                                                                                                                                                                                                                                                                                                                                                                                                                         




module.exports = router
