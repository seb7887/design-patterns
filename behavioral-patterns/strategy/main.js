const Payment = require('./Payment');

const paymentMethod = new Payment();

paymentMethod.showPaymentMethod('Maynard');
paymentMethod.showPaymentMethod('Adam');

paymentMethod.changeStrategy('Paypal');

paymentMethod.showPaymentMethod('Danny');
paymentMethod.showPaymentMethod('Justin');