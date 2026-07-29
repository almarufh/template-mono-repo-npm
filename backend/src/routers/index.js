import { Router } from "express";
import userRouter from "./user_routers.js";
import authRouter from "./auth_routers.js";
import notesRouter from "./note_routers.js";

const routers = Router();

routers.use("/auth", authRouter);
routers.use("/user", userRouter);
routers.use("/notes", notesRouter);

export default routers;