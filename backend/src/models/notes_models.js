import path from 'path';
import * as db from "../lib/data.js";

export const PATH_NOTES = path.join(process.cwd(), 'data', 'notes.json');

export function createNotes (data) {

   if (!data.id_user || !data.title) {

      return {
         success: false,
         message: `tittle cannot be empty!`,
         data: null
      };
   
   }

   let res = db.loadData(PATH_NOTES);
   let newNotes = {
      id: `${Date.now()}`,
      id_user : data.id_user,
      title: data.title,
      content: data.content,
      label: data.label,
      isPinned: data.isPinned,
      isArchived: data.isArchived,
      isDelete: data.isDelete,
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

   let results = res.find(n => n.id === id);
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
   
   const res = db.loadData(PATH_NOTES);
   let {success, data} = noteExist(res, note.id);
   if (success) {

      let result = res.filter(e => e.id !== data.id);
      note.updatedAt = new Date().toLocaleString("id");
      note.createdAt = data.createdAt;
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
