// Variables are the containers for storing data
// Js variables can be declared in 4 ways:
// 1. Automatically
// 2. var
// 3. let => block scope, must be declared before use, cannot be redeclared in the same scope
// 4. const

const accountId = 1
let email = "manoj.tharu34@gmail.com"
var accountPassword = "1234"
accountCity = "Nawalparasi"

// accountId = 2 => not allowed to change if const 
// console.log(accountId)

email = "this@gmail.com"
accountPassword = "4334"
accountCity = "parasi"
console.table([email, accountPassword, accountCity])

/*
prefer not to use var
coz of issue in block scope and functional scope
*/