'use strict';

const Transaction = require('./transaction');

const DEFAULT_BALANCE = 0;

class BankAccount {

  constructor() {
      this.balance = DEFAULT_BALANCE;
      this.transaction_history = [];
  };

  getCurrentBalance() {
    return this.balance;
  };

  deposit(amount) {
    this.balance += amount;
    let transaction = new Transaction(amount.toFixed(2), '', this.balance.toFixed(2));
    this.transaction_history.push(transaction);
  };

  withdraw(amount) {
    if(amount > this.balance) {
      throw new Error(`Invalid Balance, Balance is ${this.getCurrentBalance()}`);
    }  
    this.balance -= amount;
    let transaction = new Transaction('', amount.toFixed(2), this.balance.toFixed(2));
    this.transaction_history.push(transaction);
  };

  printStatement() {
      console.log(' date || credit || debit || balance')
    this.transaction_history.slice().reverse().forEach(function(t) {
      console.log(
        ` ${t.dateFormatted()} ||`,
        ` ${t.credit} ||`,
        ` ${t.debit} ||`,
        ` ${t.balance}`    
      );
    });
  };
};

module.exports = BankAccount;