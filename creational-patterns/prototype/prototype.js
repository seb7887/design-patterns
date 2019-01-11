class HumanBeing {
  constructor(config) {
    this.skinColor = config.skinColor;
    this.hairColor = config.hairColor;
    this.height = config.height;
    this.weight = config.weight;
    this.gender = config.gender;
  }

  clone() {
    return new HumanBeing(Object.assign({}, this));
  }
}

const myConfig = {
  skinColor: 'pale',
  hairColor: 'brown',
  height: '180cm',
  weight: '82kg',
  gender: 'male'
}

const me = new HumanBeing(myConfig);

const myClone = me.clone();

for (let key in me) {
  console.log(`Are both ${key} property values in original and clone the same value? ${me[key] === myClone[key]}`);
}