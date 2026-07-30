import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function signJwt (payload){

   return jwt.sign(payload, SECRET, {
      expiresIn: "1d"
   });

}

function verifyJwt (token) {

   return jwt.verify(token, SECRET);

}

export {
   signJwt,
   verifyJwt
};