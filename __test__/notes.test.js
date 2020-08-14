'use strict';

require('@code-fellows/supergoose');
const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');


describe('Testing nothing is logged to the console if there was no command given', () => {
  test('The console log should NOT be called', () => {
    let mockInput = {
      action: '',
      payload: 'test note',
    };

    new Notes(mockInput);
    expect(console.log).not.toHaveBeenCalled();
  });
});

// describe('Testing notes is logged to the console if there was a correct command given', () => {
//   test('The console log should be called', () => {
//     let mockInput = {
//       action: 'add',
//       payload: 'test note',
//       category: 'testing',
//     };

//     new Notes(mockInput);
//     expect(console.log).toHaveBeenCalled();
//   });
// });


// const notes = new Notes();
// jest.spyOn(notes, 'add');

// describe('Note Module', () => {

//   it('execute() does nothing with invalid options', () => {
//     return notes.execute({})
//       .then(() => {
//         expect(notes.add).not.toHaveBeenCalled();
//       });
//   });

//   it('notes() can add a note', () => {
//     const action = 'add';
//     const payload = 'test note';
//     return notes.execute({ action, payload })
//       .then(results => {
//         expect(notes.add).toHaveBeenCalled();
//       });
//   });

// });
