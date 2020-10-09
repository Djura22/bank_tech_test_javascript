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
    this.confirmDeposit(amount);
  };

  withdraw(amount) {
    if(amount > this.balance) {
      throw new Error(`Invalid Balance, Balance is ${this.getCurrentBalance()}`);  
    }  
    this.balance -= amount;
    this.confirmWithdrawal(amount);
  };

  confirmDeposit(amount) {
    var transaction = {
      date: this.time,
      credit: amount,
      debit: " ",
      balance: this.balance
    }
    this.transaction_history.push(transaction);
  };

  confirmWithdrawal(amount) {
    var transaction = {
        date: this.time,
        credit: " ",
        debit: amount,
        balance: this.balance
      }
      this.transaction_history.push(transaction);
  };
  
//   printStatement() {
//     this.transaction_history.forEach(function(transaction) {
//       console.log(transaction.join());
//     });
//   };

};

