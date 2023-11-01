import express from 'express'
import userRoutes from './userRoutes'
import messageRoutes from './messageRoutes'
import roomRoutes from './roomRoutes'
import bookingRoutes from './bookingRoutes'

const router = express.Router()

router.use("/user",userRoutes)
router.use("/message",messageRoutes)
router.use("/room",roomRoutes)
router.use("/booking",bookingRoutes)
export default router