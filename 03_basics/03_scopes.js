// scopes start with - let, var , const 

// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

// so here var not work as block scope how letseeee ??

// this is scope - {}
// objects have also this type of {} but that is object declartion 
// this is comes with functions, if-else so there we say that scope 

// this is global scope
var c = 300
let a = 400

if (true) {
    // this is block scope
    let a = 10
    const b = 20
    var c = 30
    c = 30
    console.log("Inner: ", a);
}

console.log("Outer ",a)  // - working good
// console.log(b)  // - working good
console.log(c)  //  - not good becouse it cross there limit no scope no limit becouse when there is many devloper work on a same project so it creats problem at that time


// in global scope whatever we write it avail inside block too but the thing which we write inside block is not going outside



// what is node and windows scope 

// windows scope  - when we inside our browser in - inspect place so that is when we in our windows scope
// node scope - when we inside our code enviroment and run the example through node so that is node scope


