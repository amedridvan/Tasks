const mongoes =require ('mongoose');
const { type } = require('os');
const validator = require('validator');

const TaskSchema =mongoes.Schema({
    title :{
        required : [true ,"A task must have title"] ,
        type :String ,
    } ,
    createdAt : {
        type :Date ,
        default :Date.now ()
    }, 
    state :{
        type :String ,
        enum : ["Todo", "in-progress", "done"] ,
        default: 'Todo'
    } ,
    user: {
        type: mongoes.Schema.ObjectId,
        ref: 'users',
        required: [true, 'Review must belong to a user']
      }    
});




const Task = mongoes.model("tasks",TaskSchema);

module.exports =Task ;