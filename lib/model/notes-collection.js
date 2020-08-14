'use strict';

const NotesDB = require('./notes-schema.js');

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

    const note = new NotesDB({ text: txt, category: cat });
    try {
      let save = await note.save();
      console.log('adding note: ' + txt);
      return save;
    }
    catch(err){
      console.error(`Invalid message received`);
    }
  }

  async delete(id){
    if (id){
      try {
        const del = await NotesDB.findByIdAndDelete({_id: id});
        console.log(`Note ID ${id} is deleted from database.`);
        return del;
      }
      catch (err){
        console.error(`Note ID ${id} does not exsit in database.`);
        // throw (`Note ID ${id} does not exsit in database.`);
      }

    }
  }

  clear(){
    return NotesDB.deleteMany({});
  }
}

module.exports = NotesCollection;
