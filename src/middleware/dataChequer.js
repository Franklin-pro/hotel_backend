import express from 'express'
import User from '../model/user'
import errorMessage from '../itills/errorMessage'

class dataChequer{
    static async userNotEmpty(req,res,next){
        const{firstName,lastName,email,password}=req.body
        if(firstName==""){
            return errorMessage(res,401,`provide your firstName`)
        }
        else if(lastName==""){
            return errorMessage(res,401,`provide your lastName`)
        }
        else if(email==""){
            return errorMessage(res,401,`provide your email`)
        }
        else if(password==""){
            return errorMessage(res,401,`provide your password`)
        }
        else{
            return next()
        }
    }
    static async emailExist(req,res,next){
const email = req.body.email
const user = await User.findOne({email})
if(user){
    return errorMessage(res,401,`user exist`)
}
else{
    return next()
}
    }
}
export default dataChequer