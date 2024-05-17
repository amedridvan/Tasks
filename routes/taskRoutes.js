const express = require('express');
const router = express.Router();
const userController=require ("../controllers/userController.js") ; 
const taskController =require ("../controllers/taskController.js");

router
.route("/addTask").
post(taskController.addTask);

router
.route("/")
.get(taskController.getAlltask);

router
.route("/mytasks")
.get(taskController.mytasks);


module.exports=router;