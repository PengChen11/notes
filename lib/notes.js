'use strict';

class Notes{

  constructor(input){
    //When creating new Note instance, it will have the following properties
    this.action = input.action;
    this.payload = input.payload;
    this.id = Math.floor(Math.random()*1000);

  }

  add(){
    // for now, just display the message in CLI
    console.log('adding note: ' + this.payload);
    console.log(this);

  }
  execute(){
    //this is the method to be called when passing user input validation
    const methods = ['add', 'a'];
    if (methods.includes(this.action)) this.add();

  }
}

module.exports = Notes;