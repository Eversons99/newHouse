import { Router } from "express";
import UserController from "../controllers/saveUser.js";


const router = Router()
const controller = new UserController()

router.post('/save', controller.saveUser)

export default router