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
        default :Date.now ('MM/DD/YYYY')
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
      } ,
      DateOfUpdate  :Date 
      
         
        
});

TaskSchema.pre("save",function (next) {
    this.DateOfUpdate =Date.now()-1000  ;
    next() ;
})


const Task = mongoes.model("tasks",TaskSchema);

module.exports =Task ;