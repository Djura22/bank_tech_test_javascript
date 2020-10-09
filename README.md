### Bank Tech Test in Javascript

#### For this tech test I will be rebuilding the previous bank tech test I did in Ruby, except this time in Javascript.

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see:

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Instructions for project setup

$ npm install --save-dev jasmine
$ npx jasmine init
Download the latest Jasmine docs from their website and place in /lib dir.

To run the tests:

$ run SpecRunner.html

### User Stories

```
As a user 
I'd like to be able to deposit funds into my account.
```
```
As a user 
I'd like to be able to withdraw funds from my account.
```
```
As a user 
I'd like my account balance to be updated when I make withdrawals/deposits. 
```
```
As a user 
I'd like the date that I deposited funds into my account to be recorded.
```
```
As a user 
I'd like the date that I withdrew funds from my account to be recorded. 
```
```
As a user 
I'd like to review my bank statement. 
```
```
As a user 
I'd like my bank statement to show all transactions with the date, amount withdrawn/deposited, 
and the updated balance. 
```