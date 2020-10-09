const BankAccount = require('./src/bankAccount');

const myAccount = new BankAccount();

// ---------------------------------------- Example Instructions -----------------------------------------

// make a deposit
myAccount.deposit(1000);

// make a withdrawal
myAccount.withdraw(50);

myAccount.withdraw(20);

myAccount.withdraw(20);

myAccount.withdraw(10);

myAccount.withdraw(50);

myAccount.deposit(1000);

// print a statement
myAccount.printStatement();