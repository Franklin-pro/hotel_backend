import express from 'express';
import Message from '../model/message';
import errorMessage from '../itills/errorMessage';
import successMessage from '../itills/successMessage';

class messageCotroller{
    static async createMessage(req,res){
        const{email,firstName,message}=req.body
        const messages = await Message.create({email,firstName,message})
        if(!messages){
            return errorMessage(res,201,`no message found`)
        }else{
            return successMessage(res,200,`message created successfully`,messages)
        }
    }
    static async getAllMessages(req,res){
        const messages = await Message.find()
        if(!messages || messages.length==0){
            return errorMessage(res,201,`no message found`)
        }else{
            return successMessage(res,200,`message retrived successfully`,messages)
        }
    }
    static async deleteAllMessages(req,res){
        const messages= await Message.deleteMany()
        if(!messages){
            return errorMessage(res,201,`no message deleted`)
        }else{
            return successMessage(res,200,`messages deleted`)
        }
    }
    static async deleteOneMessage(req,res){
        const id = req.params.id
        const messages = await  Message.findByIdAndDelete(id)
        if(!messages){
            return errorMessage(res,201,`no message delete with ${id}`)
        }else{
            return successMessage(res,200,`message already deleted`)
        }
    }
    static async getOneMessages(req,res){
        const id = req.params.id
        const messages= await Message.findById(id)
        if(!messages){
            return errorMessage(res,201,`no message with ${id}`)
        }else{
            return successMessage(res,200,`message retrived`,messages)
        }
    }
    static async updateMessages(req,res){
        const id = req.params.id
        const messages = await Message.findByIdAndUpdate(id,req.body,{new:true})
        if(!messages){
            return errorMessage(res,201,`no message updated`)
        }else{
            return successMessage(res,200,`message updated`,messages)
        }
    }
}
export default messageCotroller