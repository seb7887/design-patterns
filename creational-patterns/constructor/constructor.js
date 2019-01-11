class Animal {
  constructor(specie) {
    this.specie = specie;
  }

  whatIs() {
    console.log(`I'm a ${this.specie}`);
  }
}

const dog = new Animal('dog');
dog.whatIs();