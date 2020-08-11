'use strict';
const Input = require('../lib/input');
const minimist = require('minimist');

jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    _: [],
    add: 'This is a note',
  };
});


describe('When given good input, the Class’ valid() method returns true', () => {
  test('The return should be true', () => {
    let mockInput = new Input();
    expect(mockInput.valid()).toBeTruthy();
  });
});

describe('When given good input, The input module creates a new instance with both action and payload properties', () => {
  test('The return should contains both action and payload properties', () => {
    let mockInput = new Input();

    expect(mockInput.action).toStrictEqual('add');
    expect(mockInput.payload).toStrictEqual('This is a note');
  });
});


describe('Given invalid input, the Class’ valid() method returns false', () => {
  it('The return should be false', () => {
    let mockInput = new Input();
    mockInput.action = 'delete';
    mockInput.payload = 'test note';
    expect(mockInput.valid()).toBeFalsy();
  });
});
