const express = require('express')
const router = express.Router()
const userController = require('./controller/userController')






router.get('/',userController.home)
router.get('/signup',userController.signUp)
router.get('/login',userController.login)
router.get('/sharecontent',userController.shareContent)



module.exports = router