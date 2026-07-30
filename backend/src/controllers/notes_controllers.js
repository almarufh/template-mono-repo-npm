import {constants} from 'node:http2';
import * as mNote from '../models/notes_models.js';

/**
 * 
 * @param {import{"expres"}.Request} req 
 * @param {import{"express"}.Response} res 
*/

export function createNotes (req, res) {

   const { 
      id,
      user, 
      title, 
      content,
      label,
      pin,
      arch,
      del
   } = req.body;

   let data = {
      id: id,
      id_user : user,
      title: title,
      content: content || null,
      label: label || null,
      isPinned: pin|| false,
      isArchived: arch || false,
      isDelete: del || false,
   };
   let results = mNote.createNotes(data);
   res.json({results});

}

export function changeNotes (req, res) {

   const { 
      id,
      user, 
      title, 
      content,
      label,
      pin,
      arch,
      del
   } = req.body;

   let data = {
      id: id,
      id_user : user,
      title: title,
      content: content || null,
      label: label || null,
      isPinned: pin|| false,
      isArchived: arch || false,
      isDelete: del || false,
   };
   let results = mNote.changeNote(data);
   res.json({results});

}
export function getNotesUser (req, res) {

   const {id} = req.params;
   console.log(id);
   let results = mNote.getNotes(id);
   res.json({results});

}

