import express from 'express';
import messageCotroller from '../controller/messageCotroller';

const router = express.Router()

router.post("/",messageCotroller.createMessage)
router.get("/",messageCotroller.getAllMessages)
router.get("/:id",messageCotroller.getOneMessages)
router.delete("/",messageCotroller.deleteAllMessages)
router.delete("/:id",messageCotroller.deleteOneMessage)
router.patch("/:id",messageCotroller.updateMessages)

export default router