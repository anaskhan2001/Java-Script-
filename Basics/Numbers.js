const score = 400
console.log(score);

const balance = new Number(1000);
console.log(balance);

//prototype methods Function kon konse dena chate hai hm 

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //1000.00 means value kitte decimal places tk show krna chate hai
console.log(balance.toFixed(1)); //1000.0 means value kitte decimal places tk show krna chate hai

//Precision is used to format a number to a specified length. It returns a string representation of the number that is rounded to the specified number of significant digits.

const otherNumbers = 123.8972
console.log(otherNumbers.toPrecision(4));
console.log(otherNumbers.toPrecision(3));

//how to calculated hundreds
const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

