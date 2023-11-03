import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({

    roomImage:{
        type:Array,
        required:true
    },
    roomName:{
        type:String,
        required:true
    },
    roomAmount:{
        type:Number,
         required:true
    },
    roomType:{
        type:String,
        required:true
    },
    postedAt:{
        type:Date,
        default:Date.now()
    }

})
const Room = mongoose.model("Room",roomSchema)

export default Room