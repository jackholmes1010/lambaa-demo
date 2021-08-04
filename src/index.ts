import PingController from "@controllers/PingController"
import requestLogger from "@middleware/requestLogger"
import { Router } from "lambaa"

const router = new Router()
    .registerController(new PingController())
    .registerMiddleware(requestLogger)

export const handler = router.getHandler()
