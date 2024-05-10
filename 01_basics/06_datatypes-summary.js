// There are 2 types of data baiscally - primitive and non-primitive (reference type)

// diff. in primitive and non-primitive : call by value and call by reference ka diff.

// how the data store in the memory and how we acess the data so in this basis 2 categorization offically

// Primitive :  7 categories - they all are call by value whenever we copy this from somewhere to somewhere so the orginal data memory refrence not give to us the copy of that data only give to us and the changes happen in the copy only 

// String
// Number
// Boolean
// null
// undefined // variable declare, memory space declare but what value we insert in it we decide about that

// Symbol - to make some value unique (specially when we do advance frontend in js so in that case we use component and we use the same component in diff. place with slighty changes for ex - button unique so we wrap that button into a symbol )

// BigInt


// const score = 100
// const scoreValue = 100.3 // ( this is also comes in number category)

// const isLoggedIn = false  // boolean
// const outsideTemp = null   // null 
// let userEmail;  // undefined
// let userEmail = undefined // undefined also

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId);   // symbol work is if even we pass the same value the output/result always comes not same


// const bigNumber = 48402384208204420n;  //bigInt (not use as much - scarcely)



// Non-primitive (reference type) - in memory the direct refrence allocated 

// Array
// Object - for js mastery ( master the object and the browser events that's it)
// function


// const heros = ["shaktimaan", "naagraj", "doga"];   // array

// Object
// let myObj = 
// {
//     name : "negi",
//     age : 21
// };


// functions - we treat a function as a variable (variable way)

// const myFunction = function ()
// {
//    console.log("Hello world");
// };


// Js is dynamacially type or static type language ??  - dynamacially as far as i get

// const score = 100 (so we never say to js this is a number so in js we never defined language)

// const score:Number = 100 (in typescript we defined - cosen brother)



// typeof

const outsideTemp = null 
console.log(typeof(outsideTemp));  // reason why it is object - becouse of unique it is object

const myFunction = function ()
{
   console.log("Hello world");
};

console.log(typeof(myFunction));  // function return funtion but in actual we called it as a object funtion

const heros = ["shaktimaan", "naagraj", "doga"];  

console.log(typeof(heros));  // object