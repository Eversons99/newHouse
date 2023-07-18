import { Router } from "express"
import ListController from "../controllers/ListController.js"

const router = Router()
const controller = new ListController()

router.get('/list', controller.list)
router.post('/list-add', controller.addList)

export default router