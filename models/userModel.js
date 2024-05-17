const mongoes =require ('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { type } = require('os');

const UserSchema =mongoes.Schema({
    Firstname: {
     required : [true ,"a user must have first name "] ,
     type :String ,
     maxlength: [20, 'A  username must have less or equal then 20 characters'],
      minlength: [1, 'A username must have more or equal then 1 characters']
    } ,
    Lastname :{
        required : [true ,"a user must have first name "] ,
        type :String ,
        maxlength: [20, 'A  username must have less or equal then 20 characters'],
         minlength: [1, 'A username must have more or equal then 1 characters']
       } , 
       password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false 
      },
      passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          // This only works on CREATE and SAVE!!!
          validator: function(mes) {
            return mes === this.password;
          },
          message: 'Passwords are not the same!'
        }
      }  ,
      email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },
      
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      },
      
     
});



const User= mongoes.model ("users",UserSchema); 
module.exports =User ;