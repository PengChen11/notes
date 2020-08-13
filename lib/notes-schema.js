'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, default: 'general', required: true },
});

module.exports = mongoose.model('notes', notes);
