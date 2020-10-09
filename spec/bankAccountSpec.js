'use strict'

describe('BankAccount', function()  {
  var bankAccount;

  beforeEach(function() {
    bankAccount = new BankAccount();
  });
  
  it('stores a starting balance', function()  {
    expect(bankAccount.getCurrentBalance()).toEqual(0);
  });

  describe('deposit', function()  {
    
    it('adds additional money to balance of account', function() {
      bankAccount.deposit(20);
      expect(bankAccount.getCurrentBalance()).toEqual(20);

    });

  });














});