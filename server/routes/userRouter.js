const express = require('express');
const router = express.Router();
const userController=require ("../controllers/userController.js") ; 

router
.route("/")
.get(userController.getAllusers)
.patch(userController.updateWithLogin)


router
.route("/siginup")
.post(userController.signup)
router
.route("/resetpassword")
.patch(userController.forgetpassword )
router
.route("/updatepassword")
.patch(userController.updateWithoutLogin)
router
.route("/login")
.post(userController.login)

module.exports=router;