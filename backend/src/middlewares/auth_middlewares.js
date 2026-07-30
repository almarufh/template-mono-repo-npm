import * as jwt from "../lib/tokenJwt.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {function()} next
 */
export function authMiddleware(req, res, next){

   let token = req.header("Authorization");
   if (token.startsWith("Bearer ")) {
       
      try {
           
         token = token.slice("Bearer ".length).trim();
         req.data =  jwt.verifyJwt(token);
         next();
      
      } catch (error) {

         res.status(401).json({
            success: false,
            message: "Unautorized",
            data: error.message
         });
      
      }
   
   } else {

      res.status(401).json({
         success: false,
         message: "Unautorized",
         data: error.message
      });
   
   }

}