'use strict';

// node modules
// const minimist = require('minimist');
const Input = require('./lib/input');
const Notes = require('./lib/notes');

// new instance of constructor function from input.js file
const userInput = new Input();

if (userInput.valid()) new Notes(userInput);
else console.log('ERROR! Please use -a or --add as method to add notes, and make sure the notes is not empty');
