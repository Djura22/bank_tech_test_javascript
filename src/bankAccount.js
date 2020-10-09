'use strict';

const DEFAULT_BALANCE = 0;

class BankAccount {

  constructor() {
      this.balance = DEFAULT_BALANCE;
      this.transaction_history = [];
      this.time = new Date().toISOString().slice(0, 10);
  };

  getCurrentBalance() {
    return this.balance;
  };

  getTransactionHistory() {
    return this.transaction_history;
  };

  deposit(amount) {
    this.balance += amount;
    this.transaction_history.push([this.time, amount, "", this.balance]);
  };

  withdraw(amount) {
    if(amount > this.balance) {
      throw new Error(`Invalid Balance, Balance is ${this.getCurrentBalance()}`);  
    }  
    this.balance -= amount;
    this.transaction_history.push([this.time, "", -amount, this.balance]);
  };

  







}

