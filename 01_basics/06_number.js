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



// ****************Math*********************


console.log(typeof Math)
console.log(Math.abs(-3)); //output is 3. the result is always positive or zero
console.log(Math.round(245.65)); //output is 246
console.log(Math.ceil(345.654)); //output is 346
console.log(Math.floor(346.654)) //output is 346

console.log(Math.random ); // returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min); //formula