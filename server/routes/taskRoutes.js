const express = require('express');
const router = express.Router();
const userController=require ("../controllers/userController.js") ; 
const taskController =require ("../controllers/taskController.js");

router
.route("/addTask").
post(taskController.addTask);
router
.route("/updatestate/:id")
.patch(taskController.updataTaskState)

router
.route("/")
.get(taskController.getAlltask);

router
.route("/:id")
.patch(taskController.updatetask)
.delete(taskController.deletetask)
.get(taskController.mytasks);



module.exports=router;