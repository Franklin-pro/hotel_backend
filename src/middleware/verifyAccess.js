import Jwt  from "jsonwebtoken";
import errorMessage from "../itills/errorMessage";

const verifyAccess=(passrole)=>{
return (req,res,next)=>{
const token = req.headers["auth-token"];
if(!token){
    return errorMessage(res,201,`no token provided`)
}else{
    try {
        const verifyToken = Jwt.verify(token,process.env.SECRET_KEY,{expresIn:"1d"})
        req.user=verifyToken.user
        if(passrole!==verifyToken.user.role){
            return errorMessage(res,201,`you don't have access`)
        }else{
            return next()
        }
    } catch (error) {
        if(error.name=="JsonWebTokenError"){
            return errorMessage(res,401,`invalid token or expired token`)
        }
    }
}
}
}
export default verifyAccess