import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiveController } from "./controllers/ListUserReceiveController";
import { ListUserSendController } from "./controllers/ListUserSendController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
const router = Router()

// const createUserController = new CreateUserController() //ao invés disso, o objeto criado será usado diretamente no post
router.post("/users", ensureAuthenticated, ensureAdmin,new CreateUserController().handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, new CreateTagController().handle)
router.post("/login", new AuthenticateUserController().handle)
router.post("/compliments", ensureAuthenticated, new CreateComplimentController().handle)
router.get("user/compliments/send", ensureAuthenticated, new ListUserSendController().handle) 
router.get("user/compliments/receive", ensureAuthenticated, new ListUserReceiveController().handle)
router.get("/tags", ensureAuthenticated, new ListUserTagsController().handle)
router.get("/users", ensureAuthenticated, new ListUserController().handle)

export { router }