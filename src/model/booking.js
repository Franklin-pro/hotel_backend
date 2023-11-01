import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    room:{
        type:mongoose.Schema.ObjectId,
        ref:'Room'
    },

    bookingsAt:{
        type:Date,
        default:Date.now()
    }
})
bookingSchema.pre(/^find/,function(next){
    this.populate({
        path:'room',
        select:'roomName,roomType,roomAmount'
    })
    next()
})
const Booking = mongoose.model("Booking",bookingSchema)
export default Booking