import express from 'express';
import Room from '../model/room';
import errorMessage from '../itills/errorMessage';
import successMessage from '../itills/successMessage';

class roomController{
    static async createRoom(req,res){
        const {roomImage,roomName,roomAmount,roomType}=req.body
        const room = await Room.create({roomImage,roomName,roomAmount,roomType})
        if(!room){
            return errorMessage(res,201,`no room found`)
        }else{
            return successMessage(res,200,`room retrived`,room)
        }
    }
    static async getAllRoom(req,res){
        const room = await Room.find()
        if(!room || room.length==0){
            return errorMessage(res,201,`no room found`)
        }else{
            return successMessage(res,200,`room ${room.length} retrived successfully`,room)
        }
    }
}
export default roomController