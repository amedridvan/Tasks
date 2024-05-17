const User=require("../models/userModel");
const catchAsync  = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');



exports.signup = catchAsync (async (req,res,next)  =>{
const user = await User.create(req.body) ;
if(!user) {
    return next(new AppError ("ah" ,404))
}
res.status(201).json({
    message: "success", 
    data :{
     user
    }
}) 
})


exports .getAllusers =catchAsync (async (req,res,next) =>{
    const user =await User.find() ;
    if(!user) {
        return next(new AppError ("no users founded " ,404));
    }
    res.status(200).json( {
        
        data :{
            count :user.length ,
            user 
        }
    })
})
