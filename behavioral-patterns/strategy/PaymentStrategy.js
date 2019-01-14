class PaymentStrategy {
  // to get access to any method through the class name, we should create static methods

  static Card(user) {
    console.log(`${user} will pay this course with Credit Card`);
  }

  static Paypal(user) {
    console.log(`${user} will pay this course with Paypal`);
  }

  static AnotherMethod(user) {
    console.log(`${user} will pay this course with another method`);
  }
}

module.exports = PaymentStrategy;