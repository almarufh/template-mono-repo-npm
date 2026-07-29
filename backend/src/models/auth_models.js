import path from 'path';
import * as db from "../lib/data.js";
import * as modelUser from "./users_models.js";

export const PATH_AUTH = path.join(process.cwd(), 'data', 'auth.json');

export function accessExist (auth, id) {

   const results = auth.find(a => a.id === id);
   if (results === undefined) {

      return {
         success: false,
         data: null
      };
   
   } else {

      return {
         success: true,
         data: results
      };
   
   }

}

export function login (userLogin) {

   const res = modelUser.findUserByEmail(userLogin.email);
   if (res.success === true) {

      if (res.data.password === userLogin.password) {

         const id = res.data.id;
         const token = Date.now() + '-' + Math.round(Math.random() * 1E9);
         let auth = db.loadData(PATH_AUTH);
         let {success, data} = accessExist(auth, id);

         if (success) {

            data.access= true;
            data.token = token;
            data.createdAt = new Date().toLocaleString("id");
            let res = auth.filter(a => a.id !== id);
            res.push(data);
            db.saveData(res, PATH_AUTH);
         
         } else {

            userLogin = {
               access: true,
               id: id,
               token: token,
               createdAt: new Date().toLocaleString("id")
            };
            auth.push(userLogin);
            db.saveData(auth, PATH_AUTH);
         
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

export function logout (id) {

   let auth = db.loadData(PATH_AUTH);
   let {success, data} = accessExist(auth, id);
   if (success) {
      
      data.access = false;
      data.token = null;
      data.createdAt = new Date().toLocaleString("id");
      let res = auth.filter(a => a.id !== id);
      res.push(data);
      db.saveData(res, PATH_AUTH);
      return {
         success: true,
         message: "logout success!"
      };
         
   } else {

      return {
         success: false,
         message: "logout failed!, wrong id"
      };
         
   }

}