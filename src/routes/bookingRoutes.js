import express from 'express'
import bookingController from '../controller/bookingController'
import verifyAccess from '../middleware/verifyAccess'

const router = express.Router()
router.post("/:id",bookingController.bookingCreate)
router.get("/",bookingController.getAllRoom)

export default router