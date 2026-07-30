import { Router } from "express";
import * as cNote from "../controllers/notes_controllers.js";
import { authMiddleware } from "../middlewares/auth_middlewares.js";

const notesRouter = Router();
notesRouter.use(authMiddleware);
/**
 * @openapi
 * /notes/create:
 *  post:
 *    tags:
 *      - Notes
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 1785386817692
 *              user:
 *                type: string
 *                example: 1785312952021
 *              title:
 *                type: string
 *                example: Everything is Mindset
 *              content:
 *                type: string
 *                example: yang akan kita dapatkan bukanlah apa yang kita mimpikan tetapi apa yang kita lakukan
 *              label:
 *                type: string
 *                example: mindset
 *              pin:
 *                type: boolean
 *                example: false
 *              arch:
 *                type: boolean
 *                example: false
 *              del:
 *                type: boolean
 *                example: true
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 1785386817692
 *              user:
 *                type: string
 *                example: 1785312952021
 *              title:
 *                type: string
 *                example: Everything is Mindset
 *              content:
 *                type: string
 *                example: yang akan kita dapatkan bukanlah apa yang kita mimpikan tetapi apa yang kita lakukan
 *              label:
 *                type: string
 *                example: mindset
 *              pin:
 *                type: boolean
 *                example: false
 *              arch:
 *                type: boolean
 *                example: false
 *              del:
 *                type: boolean
 *                example: true
 *    responses:
 *      '200':
 *        description: logout successs
 */
notesRouter.post("/create", cNote.createNotes);

/**
 * @openapi
 * /notes/change:
 *  patch:
 *    tags:
 *      - Notes
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 1785386817692
 *              user:
 *                type: string
 *                example: 1785312952021
 *              title:
 *                type: string
 *                example: Everything is Mindset
 *              content:
 *                type: string
 *                example: yang akan kita dapatkan bukanlah apa yang kita mimpikan tetapi apa yang kita lakukan
 *              label:
 *                type: string
 *                example: mindset
 *              pin:
 *                type: boolean
 *                example: false
 *              arch:
 *                type: boolean
 *                example: false
 *              del:
 *                type: boolean
 *                example: true
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 1785386817692
 *              user:
 *                type: string
 *                example: 1785312952021
 *              title:
 *                type: string
 *                example: Everything is Mindset
 *              content:
 *                type: string
 *                example: yang akan kita dapatkan bukanlah apa yang kita mimpikan tetapi apa yang kita lakukan
 *              label:
 *                type: string
 *                example: mindset
 *              pin:
 *                type: boolean
 *                example: false
 *              arch:
 *                type: boolean
 *                example: false
 *              del:
 *                type: boolean
 *                example: true
 *    responses:
 *      '200':
 *        description: logout successs
 */
notesRouter.patch("/change", cNote.changeNotes);


/**
 * @openapi
 * /notes/{id}:
 *  get:
 *    tags:
 *      - Notes
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *          example: 1785312952021
 *    responses:
 *      '200':
 *        description: logout successs
 */
notesRouter.get("/:id", cNote.getNotesUser);

export default notesRouter;