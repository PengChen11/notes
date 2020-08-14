'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, default: 'general', required: true },
});

// // --------- LIFECYCLE HOOKS -------------- //
// // Runs any time we run the .findOne() method
// notes.post('findOne', function (doc) {
//   doc.name = doc.name.toUpperCase();
// });

// // Runs any time we create a new record instance
// notes.post('init', function () {
//   // Maybe we can create our own serial id in here?
// });

// // Runs before we save
// notes.pre('save', function () {
//   this.type = this.type.toLowerCase();
// });

module.exports = mongoose.model('notes', notes);

