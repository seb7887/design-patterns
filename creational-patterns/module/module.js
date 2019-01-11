class Module {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return console.log(`My name is ${this.name}`);
  }
}

module.exports = Module;
// or export default Module;