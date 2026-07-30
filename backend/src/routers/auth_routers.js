import { Router } from "express";
import * as cAuth from "../controllers/auth_controllers.js";

const authRouter = Router();

/**
 * @openapi
 * /auth/register:
 *  post:
 *    tags:
 *      - Auth
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: admin@gmail.com
 *              password:
 *                type: string
 *                example: 1234
 *              name:
 *                type: string
 *                example: admin
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: admin@gmail.com
 *              password:
 *                type: string
 *                example: 1234
 *              name:
 *                type: string
 *                example: admin
 *    responses:
 *      '200':
 *        description: register successs
 */
authRouter.post("/register", cAuth.register);
/**
 * @openapi
 * /auth/login:
 *  post:
 *    tags:
 *      - Auth
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: admin@gmail.com
 *              password:
 *                type: string
 *                example: 1234
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: admin@gmail.com
 *              password:
 *                type: string
 *                example: 1234
 *    responses:
 *      '200':
 *        description: login successs
 */
authRouter.post("/login", cAuth.login);
/**
 * @openapi
 * /auth/logout:
 *  post:
 *    tags:
 *      - Auth
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 1785312447951
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 1785312447951
 *    responses:
 *      '200':
 *        description: logout successs
 */
authRouter.post("/logout", cAuth.logout);

export default authRouter;