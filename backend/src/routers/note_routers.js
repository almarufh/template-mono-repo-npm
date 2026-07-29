import { Router } from "express";
import * as cNote from "../controllers/notes_controllers.js";

const notesRouter = Router();

notesRouter.post("/create", cNote.createNotes);
notesRouter.patch("/change", cNote.changeNotes);
notesRouter.get("/:id", cNote.getNotesUser);

export default notesRouter;