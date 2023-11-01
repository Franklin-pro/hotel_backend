import mongoose from "mongoose";

const messageSchemas = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const Message = mongoose.model("Message",messageSchemas)

export default Message