'use strict';


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {useNewUrlParser: true, useUnifiedTopology: true});
// const NotesDB = mongoose.model('Notes', { text: String, category: String });

const NotesDB = require('./notes-schema.js');

class Notes{

  constructor(){
    // //When creating new Note instance, it will have the following properties
    // this.action = input.action;
    // this.payload = input.payload;
    // // this.id = Math.floor(Math.random()*1000);
    // this.category = input.category;
    // this.execute();
  }

  async add(txt, cat){
    // for now, just display the message in CLI
    const note = new NotesDB({ text: txt, category: cat });
    await note.save();
    console.log('adding note: ' + txt);
    process.exit();
  }

  async delete(id){
    await NotesDB.deleteOne({_id: id});
    console.log(`Note ID ${id} is deleted from database.`);
    process.exit();
  }

  async list(category){
    let checker = (category) ? {category: `${category}`} : {};

    const noteLists = await NotesDB.find(checker).exec();

    for (let i = 0; i<noteLists.length; i++){
      console.log(`
      ${noteLists[i].text}
      Category: ${noteLists[i].category}  ID: ${noteLists[i]._id}
      -------------------------------------------------------`);

    }
    process.exit();
  }

  async execute(data){
    //this is the method to be called when passing user input validation
    if (data.action==='add')  this.add(data.payload, data.category);
    if (data.action==='list') this.list(data.category);
    if (data.action==='delete') this.delete(data.payload);
  }
}

module.exports = Notes;
