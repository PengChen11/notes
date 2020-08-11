'use strict';

// dependencies required to parse user input
const minimist = require('minimist');

class Input{

  constructor(){
    //when creating user input, it will have the following properties
    const argv = minimist(process.argv.slice(2));
    this.action = (Object.keys(argv).slice(1).toString());
    this.payload = argv[this.action];

  }

  valid(){
    //method to be called to vallidate the user input
    let validOperator = false;

    let string = false;

    const operators = ['a', 'add'];

    if (operators.includes(this.action[0])) validOperator = true;

    if (this.payload !== '' && this.payload !== true) string = true;

    return validOperator && string;
  }
}

module.exports = Input;
