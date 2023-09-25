import express from 'express'
import userController from '../controller/userController'
import dataChequer from '../middleware/dataChequer'
import validator from '../middleware/validator'

const router = express.Router()

// router.post("/",validator.inputValidator,validator.userAccount(),dataChequer.userNotEmpty,dataChequer.emailExist,userController.createUser)
router.post("/",dataChequer.userNotEmpty,dataChequer.emailExist,validator.userAccount(),validator.inputValidator,userController.createUser)
router.get("/",userController.getAllUser)
router.get("/:id",userController.getOneUser)
router.delete("/",userController.deleteAllUsers)
router.delete("/:id",userController.deleteOneUser)
router.patch("/:id",userController.updateUser)

export default router