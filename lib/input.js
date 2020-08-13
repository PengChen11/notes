'use strict';

// dependencies required to parse user input
const minimist = require('minimist');

class Input{

  constructor(){
    //when creating user input, it will have the following properties
    const argv = minimist(process.argv.slice(2));

    this.action = undefined;
    this.payload = undefined;
    this.category = undefined;
    this.parse(argv);
    // console.log('actin: ', this.action);
    // console.log('payload: ', this.payload);
    // console.log('cate: ', this.category);

  }

  valid(){
    //method to be called to vallidate the user input
    let validOperator = false;

    let string = false;

    const operators = ['add', 'list', 'delete'];

    if (operators.includes(this.action)) validOperator = true;

    if (this.payload !== '' && this.payload !== true) string = true;

    if (this.action === 'list') return true;

    return validOperator && string;
  }

  parse(argv) {
    const argsMap = {
      a: 'add',
      add: 'add',
      list: 'list',
      l: 'list',
      d: 'delete',
      delete: 'delete',
    };

    const command = Object.keys(argv).find(key => argsMap[key]);
    this.action = argsMap[command];
    if (!this.action) {
      this.action = undefined;
      this.payload = undefined;
      this.category = undefined;
    }else if (['add', 'update'].includes(this.action)) {
      this.payload = argv[this.action] || argv[this.action.charAt(0)];
      this.category = argv.category || argv.c;
    } else if (this.action==='list' && argv.list!==true && argv.l !== true) this.category = argv.list || argv.l;
    else if (this.action==='delete') this.payload = argv.delete || argv.d;
  }
}

module.exports = Input;

