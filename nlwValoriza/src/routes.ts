import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
const router = Router()

// const createUserController = new CreateUserController() //ao invés disso, o objeto criado será usado diretamente no post
router.post("/users", new CreateUserController().handle)
router.post("/tags", ensureAdmin, new CreateTagController().handle)

export { router }
