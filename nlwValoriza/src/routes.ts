import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentService } from "./service/CreateComplimentService";
const router = Router()

// const createUserController = new CreateUserController() //ao invés disso, o objeto criado será usado diretamente no post
router.post("/users", new CreateUserController().handle)
router.post("/tags", ensureAdmin, new CreateTagController().handle)
router.post("/login", new AuthenticateUserController().handle)
router.post("/compliments", new CreateComplimentController().handle)

export { router }
