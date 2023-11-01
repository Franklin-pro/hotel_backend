import express from 'express'
import Booking from '../model/booking'
import errorMessage from '../itills/errorMessage'
import successMessage from '../itills/successMessage'
import Room from '../model/room'

class bookingController{
    static async bookingCreate(req,res){
      req.body.user=req.user
      const id = req.params.id
      const roomid=await Room.findById(id)
      if(!roomid){
        return errorMessage(res,201,`room not available`)
      }else{
        return successMessage(res,200,`now your booked`,roomid)
      }
    }
    static async getAllRoom(req,res){
        const room = await Room.find()
        if(!room){
            return errorMessage(res,201,`no user booked`)
        }else{
            return successMessage(res,200,`thank u`,room)
        }
    }
}
export default bookingController