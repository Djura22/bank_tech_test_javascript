'use strict'

const Transaction = require('../src/transaction');

describe('Transaction', function()  {
  var transaction;
  var time = new Date().toISOString().slice(0, 10);

  beforeEach(function() {
    transaction = new Transaction();
  });

  describe('dateFormatted', function() {

    it('returns the transaction date formatted', function() {
      expect(transaction.dateFormatted()).toEqual(time);
    })

  })

});