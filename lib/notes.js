'use strict';


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/notesy', {useNewUrlParser: true, useUnifiedTopology: true});
// const NotesDB = mongoose.model('Notes', { text: String, category: String });

// const NotesDB = require('./model/notes-schema.js');

const NotesCollection = require('./model/notes-collection');

class Notes{

  // constructor(){
  // }

  async execute(data){
    //this is the method to be called when passing user input validation
    const notesCollection = new NotesCollection();
    if (data.action==='add')  return notesCollection.create(data.payload, data.category);
    if (data.action==='list') return notesCollection.get(data.category);
    if (data.action==='delete') return notesCollection.delete(data.payload);

  }
}

module.exports = Notes;
