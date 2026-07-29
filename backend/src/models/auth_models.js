import path from 'path';
import * as db from "../lib/data.js";
import * as modelUser from "./users_models.js";

const PATH_AUTH = path.join(process.cwd(), 'data', 'auth.json');

function accessExist (auth, id) {

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

function login (userLogin) {

   const res = modelUser.findUserByEmail(userLogin.email);
   if (res.succes === true) {

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

function logout (id) {

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

export {
   PATH_AUTH,
   accessExist,
   login,
   logout
};

console.log(login({
   email: 'alhy23@gmail.com',
   password: '1234'
}));
// console.log(logout(2));
// console.log(findUserByEmail("alhy23@gmail.com"))
// console.log(findUserByEmail("hidayatmaruf99@gmail.com"))
