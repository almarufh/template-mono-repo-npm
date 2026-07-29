import fs from 'fs';
import path from 'path';
import { 
   loadData as load, 
   saveData as save  
} from "../lib/users_data.js";

const FILE_PATH = path.join(process.cwd(), 'backend/data', 'users.json');

function createUser ( newUser ) {
    let users = load(FILE_PATH);
    users.push(newUser)
    save(users)
    return newUser
}

function findUserByEmail (email) {
    let users = load(FILE_PATH);
    const results = users.find(u => u.email === email)
    if (results === undefined) {
        return {
            success: false,
            message:"User not found",
            data: results || null
        }
    } else {
        return {
            succes: true,
            message: `Found user ${results.name}`,
            data: results
        }
    }
}

function findUserById (id) {
    let users = load(FILE_PATH);
    const results = users.find(u => u.id === id)
    if (results === undefined) {
        return {
            success: false,
            message:"User not found",
            data: results || null
        }
    } else {
        return {
            succes: true,
            message: `Found user ${results.name}`,
            data: results
        }
    }
}


// let newUser = {
//     "id": 1,
//     "name": "Alhy Ghufron",
//     "email": "alhy23@gmail.com",
//     "password": "1234"
// }

let newUser = {
    "id": 2,
    "name": "Alma'ruf Hidayat",
    "email": "hidayatmaruf99@gmail.com",
    "password": "1234"
}

export {
    newUser,
    createUser,
    findUserByEmail,
    findUserById
}

// console.log(createUser(newUser))
// console.log(findUserByEmail("alhy23@gmail.com"))
// console.log(findUserByEmail("hidayatmaruf99@gmail.com"))
