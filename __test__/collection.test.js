'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/model/notes-collection');
const notesCollection = new NotesCollection();
console.log('___________noteslollection_____----___---__----', notesCollection);

// beforeEach(()=>{
//   notesCollection.clear;
// });

describe('Note collection', () => {
  const testData = {
    text: 'test',
    category: 'testing',
    test_2: 'test-2',
    category_2: 'someting',
  };

  it('Should create - something', async ()=>{

    const note = await notesCollection.create(testData.text, testData.category);
    expect(note._id).toBeDefined();
    expect(note.text).toBe('test');
    expect(note.category).toBe('testing');

  });


  it('create() does nothing with invalid options', async () => {
    // const notesCollection = new NotesCollection();
    const failSave = await notesCollection.create({});
    expect(failSave).not.toBeDefined();
  });

  it('get() can get all notes list back without', async () => {
    // const notesCollection = new NotesCollection();
    await notesCollection.create(testData.text, testData.category);
    await notesCollection.create(testData.test_2, testData.category_2);
    const noteList = await notesCollection.get();
    expect(noteList.length).toBe(3);
  });

  it('get() can get target category notes list back', async () => {
    // const notesCollection = new NotesCollection();
    await notesCollection.create(testData.text, testData.category);
    await notesCollection.create(testData.test_2, testData.category_2);
    const noteList = await notesCollection.get(testData.category_2);
    expect(noteList.length).toBe(2);
  });

  it('delete() can delete target notes', async () => {
    // const notesCollection = new NotesCollection();
    const note = await notesCollection.create(testData.text, testData.category);

    const noteList = await notesCollection.delete(note._id);
    expect(noteList).toBeTruthy();
  });

  it('delete() can NOT delete notes that does not exsit', async () => {
    // const notesCollection = new NotesCollection();
    const note = await notesCollection.create(testData.text, testData.category);
    const noteList = await notesCollection.delete('bad_id');
    expect(noteList).toBeFalsy();
  });

});


// function compareKeys(one,another){
//   for (const key in one){
//     expect(one[key]).toBe(another[key]);
//   }
// }
