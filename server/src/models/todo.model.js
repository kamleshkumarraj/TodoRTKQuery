import mongoose from 'mongoose';

 const TodoSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        trim : true,
        minLength : 2,
        maxLength : 200
    },
    status : {
        type : String,
        enum : ["Pending" , "Completed" , "Progress"],
        default : 'Pending'
    }
} , {timestamps : true})

export const Todo = mongoose.model('todo' , TodoSchema)