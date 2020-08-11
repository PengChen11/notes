'use strict';

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

describe('Testing notes is logged to the console if there was a correct command given', () => {
  test('The console log should be called', () => {
    let mockInput = {
      action: 'add',
      payload: 'test note',
    };

    new Notes(mockInput);
    expect(console.log).toHaveBeenCalled();
  });
});

