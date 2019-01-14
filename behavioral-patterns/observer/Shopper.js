class Shopper {
  constructor(name) {
    this.name = name;
  }

  notify(categoryName, discount) {
    console.log(`${this.name}, there is a sale for ${categoryName}! ${discount}% off`);
  }
}

module.exports = Shopper;