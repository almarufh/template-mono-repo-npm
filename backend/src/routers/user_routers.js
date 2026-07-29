import { Router } from "express";
import * as cUser from "../controllers/user_controllers.js";

const userRouter = Router();

userRouter.post("/register", cUser.register);

export default userRouter;