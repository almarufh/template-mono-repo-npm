import * as jwt from "../lib/tokenJwt.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {function()} next
 */
export function authMiddleware(req, res, next){

   const token = req.header("Authorization");
   if (token.startsWith("Bearer")) {

      try {

         token = token.slice(7);
         req.data =  jwt.verifyJwt(token);
         next();
      
      } catch (error) {

         req.status(401).json({
            success: false,
            message: "Unautorized",
            data: error
         });
      
      }
   
   } else {

      req.status(401).json({
         success: false,
         message: "Unautorized",
         data: error
      });
   
   }

}