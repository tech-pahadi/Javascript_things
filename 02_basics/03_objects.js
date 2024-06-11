// if u mastery js so learn - objects and events that's it

// 2 ways to declare objects : literal , constructer

// one more concept coming in the frame - singleton( whenver we make using constructor so there a object also create singleton - means it is only object apne trike ka )

// but when we creat by other way then they are not singleton - there multiple instances bn jaate h

// when we using literals so singleton not create


// Object.create    // constructor way and inside it singleton create

// object literals

const mysymbl = Symbol("Key1")

// so now we use our symbol as a key in our object so lesgoo 

const jsUser  = {
    name : "negi",
    "full name" : "Ravinder singh negi",
    age : 21,
    // mysymbl: "mykey1",
    [mysymbl] : "mykey1",
    isLoggedIn : false,
    location : "dehradun",
    email : "negi@xyz.com",
    lastLogginDays : ["Monday", "Saturday"]
}

// so it is not like array in array we only acess by using iterate value - 0,1,2... but here in object we have keys by which we acess our values

// by default system take key as a string - "name"


// acess the objectss

// console.log(jsUser.name);   // this is not a good way

// other way
// console.log(jsUser["email"]);  // becouse bts take it as a string

// so now if we go to acess the full name so we never ever acess by using .dot method so for that's why we use 2nd method

// console.log(jsUser."Full name");  // showing error 
// console.log(jsUser["full name"]); 

// symbol acess
// console.log(jsUser.mysymbl);
// console.log(typeof(jsUser.mysymbl));   // string - so it is not created as a symbol

// console.log(jsUser[mysymbl]);
// console.log(typeof(jsUser[mysymbl]));


// Now how we change our object values
// jsUser.email = "pahadi@gmail.com"
// console.log(jsUser["email"]);

// Freeze so by this method we apply freeze in the object and we can't change any value further the changes not propogate we see no error 
// Object.freeze(jsUser)
// jsUser.email = "xyz@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);


// Funtion add in a object 

// in our function there is no discramination we treat as a variable 

jsUser.greeting = function()
{
    console.log("Hello js user");
}

jsUser.greetingTwo = function()
{
    console.log(`Hello js user, ${this.name}`);  
    // `` this are string interpolation
    // when we refrence same object so we use - this
}



// so function return back only comes here only refrence comes of the function
console.log(jsUser.greeting);


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




// more and more times we acess our values using - .
// but there are some special cases when we acess our value with different method

