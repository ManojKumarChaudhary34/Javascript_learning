//**************number **********

const score = 400
console.log(typeof score);

const number = new Number(400)
console.log(typeof number);
console.log(number.toExponential()); //output 4e+2

const newNumber = new Number(100)
console.log(newNumber.toFixed(2)); // output 100.00

const nextNumber = new Number(10000000)
console.log(nextNumber.toLocaleString()); //output 10,000,000

console.log(number.toString().length); // output 3

const otherNumber = new Number(123.678)
console.log(otherNumber.toPrecision(3)); // output 124