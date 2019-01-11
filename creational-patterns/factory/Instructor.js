const Person = require('./Person');

class Instructor extends Person {
  constructor(name, position, earning) {
    super(name);
    this.position = position;
    this.earning = earning;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Instructor;