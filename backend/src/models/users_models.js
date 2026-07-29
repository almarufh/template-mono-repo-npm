import path from 'path';
import { 
   loadData as load, 
   saveData as save  
} from "../lib/data.js";

const PATH_USERS = path.join(process.cwd(), 'backend/data', 'users.json');

function createUser ( newUser ) {

   const {success, data} = findUserByEmail(newUser.email);
   if (success) {

      return {
         success: false,
         message:"account alredy exist!",
         data: data.name
      };
   
   }

   let users = load(PATH_USERS);
   newUser = {
      "id": Date.now(),
      "name": newUser.name,
      "email": newUser.email,
      "password": newUser.password,
      "createdAt": new Date().toLocaleString("id")
   };
   users.push(newUser);
   save(users, PATH_USERS);
   return {
      success: true,
      message: `register success!`,
      data: newUser
   };

}

function findUserByEmail (email) {

   let users = load(PATH_USERS);
   const results = users.find(u => u.email === email);
   if (results === undefined) {

      return {
         success: false,
         message:"User not found",
         data: results || null
      };
   
   } else {

      return {
         success: true,
         message: `Found user ${results.name}`,
         data: results
      };
   
   }

}

function findUserById (id) {

   let users = load(PATH_USERS);
   const results = users.find(u => u.id === id);
   if (results === undefined) {

      return {
         success: false,
         message:"User not found",
         data: results || null
      };
   
   } else {

      return {
         success: true,
         message: `Found user ${results.name}`,
         data: results
      };
   
   }

}

let newUser = {
   "name": "Alhy Ghufron",
   "email": "alhy23@gmail.com",
   "password": "1234"
};

// let newUser = {
//     "id": 2,
//     "name": "Alma'ruf Hidayat",
//     "email": "hidayatmaruf99@gmail.com",
//     "password": "1234"
// }

export {
   newUser,
   PATH_USERS,
   createUser,
   findUserByEmail,
   findUserById
};

// console.log(createUser(newUser));
// console.log(findUserByEmail("alhy23@gmail.com"))
// console.log(findUserByEmail("hidayatmaruf99@gmail.com"))
