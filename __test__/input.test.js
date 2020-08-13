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
    mockInput.action = 'bad request';
    mockInput.payload = 'test note';
    expect(mockInput.valid()).toBeFalsy();
  });
});


describe('Parse', () => {

  it('should parse -a with payload', () => {
    const input = new Input();
    input.parse({ a: 'good payload' });
    expect(input.action).toBe('add');
    expect(input.payload).toBe('good payload');
  });

  it('should parse --add with payload', () => {
    const input = new Input();
    input.parse({ add: 'good payload' });
    expect(input.action).toBe('add');
    expect(input.payload).toBe('good payload');
  });

  it('should have undefined action and payload for unknown switch', () => {
    const input = new Input();
    input.parse({ unknown: 'some payload' });
    expect(input.action).not.toBeDefined();
    expect(input.payload).not.toBeDefined();
  });

});

describe('Validate', () => {

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBe(true);
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    options.parse({});// break it
    expect(options.valid()).toBe(false);
  });

});

describe('category', () => {
  it('should parse category with full switch', () => {
    let options = new Input();
    options.parse({ add: 'buy milk', category: 'groceries' });
    expect(options.category).toBe('groceries');
  });
  it('should parse category with short switch', () => {
    let options = new Input();
    options.parse({ add: 'buy milk', c: 'groceries' });
    expect(options.category).toBe('groceries');
  });
  it('should parse undefined category with missing switch', () => {
    let options = new Input();
    options.parse({ add: 'buy milk' });
    expect(options.category).not.toBeDefined();
  });
});
