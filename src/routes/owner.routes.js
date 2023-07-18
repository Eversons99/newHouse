import { Router } from "express";
import UserController from "../controllers/ownerController.js";

const router = Router()
const controller = new UserController()

router.post('/save', controller.saveOwner)

export default router