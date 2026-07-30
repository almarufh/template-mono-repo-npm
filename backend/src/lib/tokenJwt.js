import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function signJwt (payload){

   return jwt.sign(payload, SECRET, {
      expiresIn: "15m"
   });

}

function verifyJwt (token) {

   return jwt.verify(token, SCRET);

}

export {
   signJwt,
   verifyJwt
};