import {constants} from 'node:http2';
import * as mUser from '../models/users_models.js';

/**
 * 
 * @param {import{"expres"}.Request} req 
 * @param {import{"express"}.Response} res 
*/
export function register (req, res) {

   const { name, email, password } = req.body;
   console.log(name);

   let newUser = {
      name: name,
      email: email,
      password: password
   };
    
   let results = mUser.createUser(newUser);
   res.json({results});

}