import { Router } from "express";
import ownerRouter from './owner.routes.js'
import appRouter from './app.routes.js'

const routes = Router()

routes.use('/owner', ownerRouter)
routes.use('/app', appRouter)

export default routes