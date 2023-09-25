import { check,validationResult } from "express-validator"
import errorMessage from "../itills/errorMessage"

class validator{
    static  inputValidator(req,res,next){
        const error = validationResult(req)
        if(!error==error.isEmpty()){
            error.errors.map((error)=>{
                return errorMessage(res,401,error.msg)
            })
        }else{
            return next()
        }
    }
    static userAccount(){
        return [
            check("firstName","plz write firstName correctly").trim().isAlpha(),
            check("lastName","plz write lastName correctly").trim().isAlpha(),
            check("email","plz write email correctly").trim().isEmail(),
            check("password","plz write strong password").trim().isStrongPassword(),
        ]
        
    }
}
export default validator