import path from 'path';
import * as db from "../lib/data.js";

export const PATH_NOTES = path.join(process.cwd(), 'data', 'notes.json');

export function createNotes (data) {

   let res = db.loadData(PATH_NOTES);
   let newNotes = {
      id: Date.now(),
      id_users : data.id_user,
      title: data.title,
      content: data.content,
      label: data.label || null,
      isPinned: false,
      isArchived: false,
      isDelete: false,
      createdAt: new Date().toLocaleString("id"),
      updatedAt: new Date().toLocaleString("id")
   };
   res.push(newNotes);
   db.saveData(res, PATH_NOTES);
   return {
      success: true,
      message: `notes ${newNotes.title} created!`,
      data: newNotes
   };

}

export function noteExist (res, id){

   let results = res.find(n => n.id = id);
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

export function getNotes (id){

   let res = db.loadData(PATH_NOTES);
   let results = res.filter(n => n.id_user === id);
   if (results.length > 0) {

      return {
         success: true,
         message: `found ${results.length} notes!`,
         data: results
      };
   
   } else {

      return {
         success: false,
         message: "notes empty!",
         data: null
      };
   
   }

}


export function changeNote (note) {

   let res = db.loadData(PATH_NOTES);
   let {success, data} = noteExist(res, note.id);
   if (success) {

      let result = res.filter(e => e.id === note.id && e.id_user === note.id_user);
      note.updatedAt = new Date().toLocaleString("id");
      result.push(note);
      db.saveData(result, PATH_NOTES);
      return {
         success: true,
         data: note
      };
   
   } else {

      return {
         success: false,
         data: "note not found!"
      };
   
   }

}

let newNotes1 = {
   id_user: 1,
   title: "malam minggu",
   content: "hari yang sangat membahagiakan",
};

let newNotes2 = {
   id: 1785306954260,
   id_user: 1,
   title: "malam Senin",
   content: "hari yang sangat membahagiakan",
   label: "TEKNIK",
   isPinned: true,
   isArchived: false,
   isDelete: true,
   createdAt: "29/7/2026, 14.35.54",
   updatedAt: "29/7/2026, 14.35.54"
};

// console.log(createNotes(newNotes1));
// console.log(changeNote(newNotes2));
console.log(getNotes(2));