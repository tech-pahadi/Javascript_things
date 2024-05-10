
// in starting languages to reserve memory and free both is our work for ex - C language
// the old programming languages like - assembly the work is too hard

// but today modern lang. like js and all & also mid-modern lang.  - so there the memory control give  to us is not too much ( automatic garbage collection & all they all are there)

// How memory allocation work in JS :


// ***************************************

// stack and heap memory

// all primitive places - stack memory (copy milta hai jo bhi variable declare kiya )
// non-primitive - heap memory (reference milta hai - original value ka )


let myYoutubeName = "techpahadi"
let anotherName = myYoutubeName
anotherName = "Ravinder negi"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = 
{
    email : "negi@gmail.com",
    id : "negi@ybl"
};

let userTwo = userOne;

userTwo.email = "rawat@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);