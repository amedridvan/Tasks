const User=require("../models/userModel");
const catchAsync  = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const jwt = require('jsonwebtoken');


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

exports.login =catchAsync (async (req,res,next) => {
// email validate , password validate , 

 const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check if user exists 
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new AppError('Incorrect email', 401));
  }
  // 3) Check if password correct
  if(!(await user.correctPassword(password, user.password))){ 
    return next (new AppError ("Incorrect password ", 401))
  }
  //create token with jwt 
  const token = jwt.sign( { id :user._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
 res.status(200) .json({
    token :token ,
    data :{
        user
    }
})

})