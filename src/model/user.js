import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
    confirmPassword:{
        type:String,
      
    },
    date:{
        type:Date,
        default:Date.now()
    },
    role:{
type:String,
enum:["user","admin"],
default:"user"
    }
})
const User = mongoose.model("User",userSchemas)
export default User

