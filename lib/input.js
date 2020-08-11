'use strict';

// dependencies required to parse user input
const minimist = require('minimist');
// check minimist docs for details
const argv = minimist(process.argv.slice(2));
const method = (Object.keys(argv).slice(1).toString());
//gets the message payload
const message = argv[method];

class Input{

  constructor(){
    //when creating user input, it will have the following properties
    this.action = method;
    this.payload = message;

  }

  validate(input){
    //method to be called to vallidate the user input
    let validOperator = false;

    let string = false;

    const operators = ['a', 'add'];

    if (operators.includes(method[0])) validOperator = true;

    if (input.payload !== '' && input.payload !== true) string = true;

    return validOperator && string;
  }
}

module.exports = Input;
