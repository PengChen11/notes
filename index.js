'use strict';


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {useNewUrlParser: true, useUnifiedTopology: true});

const Input = require('./lib/input');
const Notes = require('./lib/notes');

// new instance of constructor function from input.js file
const userInput = new Input();
const newNote = new Notes();

if (userInput.valid()) {
  newNote.execute(userInput)
    .then(mongoose.disconnect)
    .catch(err=> console.error(err));
}
else {
  console.log('ERROR! Please use proper method to add, delete, notes, and make sure the notes is not empty');
  mongoose.disconnect();
}

