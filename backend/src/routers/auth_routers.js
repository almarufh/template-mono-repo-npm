import { Router } from "express";
import * as cAuth from "../controllers/auth_controllers.js";

const authRouter = Router();

authRouter.post("/register", cAuth.register);
authRouter.post("/login", cAuth.login);
authRouter.post("/logout", cAuth.logout);

export default authRouter;