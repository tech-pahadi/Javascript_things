// if u mastery js so learn - objects and events that's it

// 2 ways to declare objects : literal , constructer

// one more concept coming in the frame - singleton( whenver we make using constructor so there a object also create singleton - means it is only object apne trike ka )

// but when we creat by other way then they are not singleton - there multiple instances bn jaate h

// when we using literals so singleton not create


// Object.create    // constructor way and inside it singleton create

// object literals

const jsUser  = {
    name : "negi",
    "full name" : "Ravinder singh negi",
    age : 21,
    isLoggedIn : false,
    location : "dehradun",
    email : "negi@xyz.com",
    lastLogginDays : ["Monday", "Saturday"]
}

// so it is not like array in array we only acess by using iterate value - 0,1,2... but here in object we have keys by which we acess our values

// by default system take key as a string - "name"


// acess the objectss

console.log(jsUser.name);   // this is not a good way

// other way
console.log(jsUser["email"]);  // becouse bts take it as a string

// so now if we go to acess the full name so we never ever acess by using .dot method so for that's why we use 2nd method

console.log(jsUser["full name"]); 