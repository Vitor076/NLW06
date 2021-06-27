import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagsController";
import { sureAdmin } from "./middlewares/sureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { SureAuthenticad } from "./middlewares/sureAutheticated"
import { ListUserSendComplimentsController } from "./controllers/listUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";



const router = Router()

const createUserController = new CreateUserController()
const CreatetagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUserController = new ListUserController()

router.post("/users", createUserController.handle)
router.post("/tags", SureAuthenticad, sureAdmin, CreatetagController.handle)
router.post("/session", authenticateUserController.handle)
router.post("/compliment", SureAuthenticad, createComplimentController.handle)
router.get("/users/compliments/send", SureAuthenticad, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", SureAuthenticad, listUserReceiveComplimentsController.handle)
router.get("/tags", SureAuthenticad, listTagsController.handle)
router.get("/users", SureAuthenticad, listUserController.handle)

export { router }