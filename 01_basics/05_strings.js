// *******old methods to declare strings

// const string = "manoj"
// const newString = " chaudhary"
// console.log(string + newString);
// console.log('manoj' + 'chaudhary');
// console.log('manoj' + 'chaudhary' + '01');
// console.log('chaudhary' + '01' + 1 + 3);

// good practice to declare strings

const stringName = new String("Apple")
console.log(stringName);
console.log(stringName.__proto__);
console.log(stringName.length);
console.log(stringName.concat(stringName));