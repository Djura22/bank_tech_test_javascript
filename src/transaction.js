'use strict'

class Transaction {

  constructor(credit, debit, balance) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit
    this.balance = balance;
  };

  dateFormatted() {
    return this.date.toISOString().slice(0, 10)
  }
};

module.exports = Transaction;