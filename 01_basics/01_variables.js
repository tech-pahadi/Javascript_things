const accountId = 24640
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Dehradoon" // not a good way to declare variable
let accountState;
 
// accountEmail "hc@hc.com"
accountPassword = "212121"
accountCity = "jaipur"

// console.log(accountId);

/*
prefer not to use var
becouse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);