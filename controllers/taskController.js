const Task=require("../models/taskModel");
const catchAsync  = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const mongoes =require ('mongoose');

exports.addTask = catchAsync (async (req,res,next) =>{
const task =await Task.create(req.body) ;

res.status(201) .json({
    message: "success" ,
   task
})

})

exports .getAlltask =catchAsync (async (req,res,next) =>{
    const task =await Task.find()
    if(!task) {
        return next(new AppError ("no users founded " ,404));
    }
    res.status(200).json( {
        
        data :{
            count :task.length ,
            task 
        }
        
    })
})

exports.mytasks =catchAsync (async (req,res ,next) => {
const task= await Task.find({
    user : new mongoes.Types.ObjectId(req.body.id)
})
res.status(200) .json({
    data :{
        count :task.length ,
        task
    }
})
})

exports.updatetask = catchAsync (async (req,res,next) => {
    const task = await Task.findByIdAndUpdate(req.params.id , req.body ,
        {
            new :true, 
            runValidators :true
        }) 
     if (!task) {
        return next (new AppError("any tasks with this id ") ,404) ;
     }  

     res.status(200) .json({
        data :{
            task
        }
     })
})

exports.deletetask = catchAsync (async (req,res,next) => {
    const task = await Task.findByIdAndDelete(req.params.id ) ;
     if (!task) {
        return next (new AppError("any tasks with this id ") ,404) ;
     }  

     res.status(200) .json({
        data :{
            task
        }
     })
})