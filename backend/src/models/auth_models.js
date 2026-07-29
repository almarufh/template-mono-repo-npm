import fs from 'fs';
import path from 'path';
import * as data from "../lib/users_data.js";
import * as users from "./users_models.js";

const PATH_AUTH = path.join(process.cwd(), 'backend/data', 'auth.json');

function accessExist (auth, id) {

   const results = auth.find(a => a.id === id);
   if (results === undefined) {

      return false;
   
   } else {

      return true;
   
   }

}

function login (userLogin) {

   const res = users.findUserByEmail(userLogin.email);
   if (res.succes === true) {

      if (res.data.password === userLogin.password) {

         const id = res.data.id;

         const token = Date.now() + '-' + Math.round(Math.random() * 1E9);
         userLogin = {
            access: true,
            id: id,
            token: token
         };

         let auth = data.loadData(PATH_AUTH);

         if (accessExist(auth, id)) {

            let res = auth.filter(a => a.id !== id);
            res.push(userLogin)
            data.saveData(res, PATH_AUTH);
         
         } else {

            auth.push(userLogin);
            data.saveData(auth, PATH_AUTH);
         
         }



         return {
            success: true,
            message: "login success!",
            data: userLogin
         };
      
      } else {

         return {
            success: false,
            message: "wrong password!",
            data: null
         };
      
      }
   
   } else {

      return {
         success: false,
         message: "email not found!",
         data: null
      };
   
   }

}


export {
   PATH_AUTH,
   login,
};

let newLogin = {
   email: "hidayatmaruf99@gmail.com",
   password: "1234"
};
console.log(login(newLogin));
// console.log(findUserByEmail("alhy23@gmail.com"))
// console.log(findUserByEmail("hidayatmaruf99@gmail.com"))
