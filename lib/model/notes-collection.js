'use strict';

const NotesDB = require('./notes-schema');

class NotesCollection {

  async get(category){
    let checker = (category) ? {category: `${category}`} : {};

    try{
      const noteLists = await NotesDB.find(checker).exec();

      for (let i = 0; i<noteLists.length; i++){
        console.log(`
        ${noteLists[i].text}
        Category: ${noteLists[i].category}  ID: ${noteLists[i]._id}
        -------------------------------------------------------`);
      }
      return noteLists;
    }
    catch (err){
      console.error(err);
    }
  }

  async create(txt, cat){
    if (txt && cat){

      const note = new NotesDB({ text: txt, category: cat });
      try {
        let save = await note.save();
        console.log('adding note: ' + txt);
        return save;
      }
      catch(err){
        console.error(err);
      }
    }
  }

  async delete(id){
    if (id){
      try {
        const del = await NotesDB.findByIdAndDelete({_id: id});
        if (del) console.log(`Note ID ${id} is deleted from database.`);
        else console.log(`Note ID ${id} does not exsit in database.`);
        return del;
      }
      catch (err){
        console.error(err);
      }

    }
  }
}

module.exports = NotesCollection;
