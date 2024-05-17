const express = require('express');
const router = express.Router();
const userController=require ("../controllers/userController.js") ; 

router
.route("/")
.post(userController.signup)
.get(userController.getAllusers)


module.exports=router;