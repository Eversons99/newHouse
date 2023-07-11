import { Router } from "express";
import userRouter from './user.routes.js'

const routes = Router()

routes.use('/user', userRouter)

export default routes