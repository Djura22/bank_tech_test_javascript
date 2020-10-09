'use strict'

const BankAccount = require('../src/bankAccount');

describe('BankAccount', function()  {
  var bankAccount;

  beforeEach(function() {
    bankAccount = new BankAccount();
  });

  it('stores a starting balance', function()  {
    expect(bankAccount.getCurrentBalance()).toEqual(0);
  });

  it('stores a transaction history', function() {
    bankAccount.deposit(20);
    bankAccount.withdraw(10);
    expect(bankAccount.getTransactionHistory().length).toEqual(2);
    expect(bankAccount.getTransactionHistory()[0].credit).toEqual(20);
    expect(bankAccount.getTransactionHistory()[1].debit).toEqual(10);
  });

  describe('deposit', function()  {
  
    it('adds additional money to balance of account', function() {
      bankAccount.deposit(20);
      expect(bankAccount.getCurrentBalance()).toEqual(20);
    });

  });

  describe('withdraw', function()  {
    
    it('withdraws money from balance of account', function() {
      bankAccount.deposit(20);
      bankAccount.withdraw(10);
      expect(bankAccount.getCurrentBalance()).toEqual(10);
    });

    it('does not withdrawal more than the available balance', function() {
      bankAccount.deposit(20);
      expect(function() { bankAccount.withdraw(21); }).toThrowError(`Invalid Balance, Balance is ${bankAccount.balance}`);
    });

  });

});