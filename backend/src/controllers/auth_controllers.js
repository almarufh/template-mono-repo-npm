import {constants} from 'node:http2';
import * as mUser from '../models/users_models.js';
import * as mAuth from '../models/auth_models.js';

/**
 * 
 * @param {import{"expres"}.Request} req 
 * @param {import{"express"}.Response} res 
*/

export function register (req, res) {

   const { name, email, password } = req.body;
   let newUser = {
      name: name,
      email: email,
      password: password
   };
   let results = mUser.createUser(newUser);
   res.json({results});

}

export function login (req, res) {
   console.log("Header :", req.header)

   const { email, password } = req.body;
   let userLogin = {
      email: email,
      password: password
   };
   let results = mAuth.login(userLogin);
   res.json({results});

}

export function logout (req, res) {

   const id = req.data.id;
   let results = mAuth.logout(id);
   res.json({results});

}
