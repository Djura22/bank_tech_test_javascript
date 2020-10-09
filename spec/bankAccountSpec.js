'use strict'

describe('BankAccount', function()  {
  var bankAccount;

  beforeEach(function() {
    bankAccount = new BankAccount();
  });
  
  it('stores a starting balance', function()  {
    expect(bankAccount.getCurrentBalance()).toEqual(0);
  });














});