const PaymentStrategy = require('./PaymentStrategy');

class Payment {
  constructor(strategy = 'Card') {
    // to get access to any method through the class name, we should create static methods
    this.strategy = PaymentStrategy[strategy];
  }

  changeStrategy(newStrategy) {
    this.strategy = PaymentStrategy[newStrategy];
    console.log('************** The payment strategy has been changed *********');
  }

  showPaymentMethod(user) {
    return this.strategy(user);
  }
}

module.exports = Payment;