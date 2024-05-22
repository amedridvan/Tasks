const User=require("../models/userModel");
const catchAsync  = require('../utils/catchAsync');
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
console.log(email ,password)
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
 res.status(200).json({
  status :"success" ,
    token :token ,
    data :{
        user
    }
})

})

exports.forgetpassword = catchAsync( async (req,res,next) => {
 const  {email } =req.body ;
 if(!email)  {
  return next (new AppError ("please provided email " ,404))
 }
 const user = await User.findOne( {email :email }) ;
 if(!user) {
  return next (new AppError ("no user with this email adress ",404))
 }
  
  res.status(200) .json({
    message :"You will be directed to the page to set a new password" ,
    email :user.email
  })
})

exports.updateWithoutLogin  =catchAsync (async (req,res,next) => {
 // 1) Get user from collection
 const user = await User.findOne({email:req.body.email}).select('+password');
if(!user){
return next(new AppError("no user founded ",404))
}
   // 3) If so, update password
   user.password = req.body.password;
   user.passwordConfirm = req.body.passwordConfirm;
   await user.save();

   res.status(200).json({
    message :"Your password successfully has been updated " ,
    user :user 
   })
   
})
exports.updateWithLogin =catchAsync (async (req,res,next)=> {
  // get a user from collections  
  const user = await User.findById(req.body.id).select("+password") ;
   // 2) Check if POSTed current password is correct
   if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  res.status(200).json({
    message :"Your password successfully has been updated " ,
    user :user 
   })

})