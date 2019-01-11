class Course {
  //constructor(name, sales, isFree = false, price, isCampain = false) {
  constructor(builder) {
    this.name = builder.name;
    this.sales = builder.sales || 0;
    this.isFree = builder.isFree;
    this.price = builder.price;
    this.isCampain = builder.isCampain;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Course;
