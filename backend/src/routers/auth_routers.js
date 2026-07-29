import { Router } from "express";
import * as cUser from "../controllers/auth_controllers.js";

const authRouter = Router()

authRouter.post("/register", cUser.register)

export default authRouter