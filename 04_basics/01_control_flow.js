// control flow - so all the time we see in past all the codes run properly
// but sometime all the code execute is not good - the code is execute in the conditional base is good (control flow/logic flow)


// if - else

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
//     console.log("User logged in");
// }

// if (2 == 2) {
//     console.log("User logged in 1");
// }


// <, >, <=, >=
// =  (assign operator)
// == (is equal to )
// !=  ( not equal to )
// === (equal to + type check)
// !== (not equal to + type check not)

// if (2 === "2") {
//     console.log("Yeah, data type also same");
// }
// else 
// {
//     console.log("No, data type is not same");
// }



// const temprature = 41
// if (temprature < 50) {
//     console.log("Less then 50");
// }
// else
// {
//     console.log("Greater then 50");
// }
// console.log("Execute always");



const score = 200

if(score > 100)
{
    // const power = "fly"  - use let or const always

    var power = "fly"   // show it execute outside also - global acess (not good) - show sometimes error is also good

    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);  // show error - not in scope 



// short hand notationif(score > 100)

// const balance = 1000;
// if(balance > 500)  console.log("implicit scope - maan liya hai curly braces (execute in one line");

// immature code 
// if(balance > 500)  console.log("Execute1"), console.log("Execute2");




// Nesting - multiple condition

// const balance = 1000;
// if (balance < 500) {
//     console.log("Less then 500");
// }
// else if(balance < 750){
//     console.log("Less then 750");
// }
// else if(balance < 900){
//     console.log("Less then 900");
// }
// else{
//     console.log("Less then 1200");
// }




// real life use - nesting (shopping online / courses purchase)

const isUserLoggedIn2 = "true"
const debit_card = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn2 && debit_card) {
    console.log("Allow to buy courses");
}
else if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("Permit user logged In");
}
else{
    console.log("Don't allow to purchase the course and logged in");
}


// so in future / react - we do conditional rendering in which we say if userloggedin and also have the token which we give to the user - so don't show logged in button to him - us logged in button ki jgh uska text change kr do or logged out button dikhao 
