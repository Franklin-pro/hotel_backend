import express from 'express'
import User from '../model/user'
import errorMessage from '../itills/errorMessage'
import successMessage from '../itills/successMessage'
import bcrypt,{ compare } from 'bcrypt'



class userController{
    static async createUser(req,res){
        const {firstName,lastName,email,password,confirmPassword}=req.body
         if(req.body.password!== req.body.confirmPassword){
            return errorMessage(res,201,`password and confirmPassword not match`)
         }
         const hashPassword =bcrypt.hashSync(req.body.password,10)

        const user = await User.create({firstName,lastName,password:hashPassword,email})
        if(!user){
            return errorMessage(res,201,`no user created`)
        }else{
            return successMessage(res,200,`user created user`,user)
        }
    }
    static async getAllUser(req,res){
        const users = await User.find();
        if(!users || users.length==0){
            return errorMessage(res,201,`no user found`)
        }
        else{
            return successMessage(res,200,`all users found ${users.length}`,users)
        }
    }

    static async getOneUser(req,res){
        const id =req.params.id
        const users = await User.findById(id)
        if(!users){
            return errorMessage(res,201,`no user found with ${id}`)
        }
        else{
            return successMessage(res,200,`user found`,users)
        }
    }
    static async deleteAllUsers(req,res){
        const users = await User.deleteMany();
        if(!users){
            return errorMessage(res,201,`no user deleted`)
        }
        else{
            return successMessage(res,200,`all users deleted`)
        }
    }
    static async deleteOneUser(req,res){
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return errorMessage(res,201,`no user with ${id}`)
        }else{
            return successMessage(res,200,`user deleted`)
        }
    }
    static async updateUser(req,res){
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id,req.body,{new:true})
        if(!user){
            errorMessage(res,201,`no user updates`)
        }
        else{
            return successMessage(res,200,`user update successfully`,user)
        }
    }
}

export default userController