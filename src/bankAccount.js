'use strict';

const DEFAULT_BALANCE = 0;

class BankAccount {

  constructor() {
      this.balance = DEFAULT_BALANCE
      this.transaction_history = []
  };

  getCurrentBalance() {
    return this.balance;
  };

  getTransactionHistory() {
    return this.transaction_history;
  };

  deposit(amount) {
    this.balance += amount;
    this.transaction_history.push(amount);
  };

  withdraw(amount) {
    this.balance -= amount;
    this.transaction_history.push(amount);
  };



}

