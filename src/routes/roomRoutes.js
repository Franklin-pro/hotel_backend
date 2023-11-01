import express from 'express'
import roomController from '../controller/roomController'

const router = express.Router()

router.post("/",roomController.createRoom)
router.get("/",roomController.getAllRoom)
export default router