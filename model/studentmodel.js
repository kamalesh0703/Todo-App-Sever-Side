var mongoose=require('mongoose')
const Schema=mongoose.Schema
var apiSchema=new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    status:{
        type:String
    }
});
module.exports=mongoose.model('todolist',apiSchema)