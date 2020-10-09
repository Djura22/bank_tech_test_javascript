'use strict'

describe('BankAccount', function()  {
  var bankAccount;
  var time = new Date().toISOString().slice(0, 10);

  beforeEach(function() {
    bankAccount = new BankAccount();
  });

  it('stores a starting balance', function()  {
    expect(bankAccount.getCurrentBalance()).toEqual(0);
  });

  it('stores a transaction history', function() {
    bankAccount.deposit(20);
    bankAccount.withdraw(10);
    expect(bankAccount.getTransactionHistory()).toEqual([ { date: time, credit: 20, debit: ' ', balance: 20 }, { date: time, credit: ' ', debit: 10, balance: 10 } ]);
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
      expect(function() { bankAccount.withdraw(21); } ).toThrowError(`Invalid Balance, Balance is ${bankAccount.balance}`);
    });

  });

  describe('confirmDeposit', function() {
    
    it('pushes deposit data into transaction_history as an array', function() {
      bankAccount.balance += 10;
      bankAccount.confirmDeposit(10);
      expect(bankAccount.getTransactionHistory()).toEqual([ { date: time, credit: 10, debit: ' ', balance: 10 } ])
    })

  });

  describe('confirmWithdrawal', function() {
    
    it('pushes withdrawal data into transaction_history as an array', function() {
      bankAccount.balance += 20;
      bankAccount.balance -= 10;
      bankAccount.confirmWithdrawal(10);
      expect(bankAccount.getTransactionHistory()).toEqual([ { date: time, credit: ' ', debit: 10, balance: 10 } ])
    })

  });


});