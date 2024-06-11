// objects singleton and literal 

// so we see the literal in previous tutorial yeaah that is literal method

// so in this tut we see the singleton or with constructor how we declare

// const tinderUser = {} // non single ton object 
const tinderUser = new Object() // single ton object 

tinderUser.id = "123abc"
tinderUser.name = "negi"
tinderUser.isLoggedIn = false
console.log(tinderUser); 


// objects inside objects

const regularUser = {
    email : "xyz@gmail.com",
    fullname: {
        userfullname : {
            firstname : "ravi",
            lastname : "negi",
        }
    }
}

// so all the object after fullname the fullname stores all of that

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// optional chaning - if suppose full name not exist so what ?? - becouse when sometimes the response is comes through api then we use this nhi to if else lgaate rh jaoge and that complex

// console.log(regularUser.fullname?.userfullname.firstname);

// combine/merge objects

const obj1 = {
    1 : "one",
    2 : "two"
}

const obj2 = {
    3 : "three",
    4 : "four"
}

// showing error - problem same occur that occur in array ke andr array

// const obj3 = {
//     obj1,
//     obj2
// }

// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

// but we have one more syntax - exact value comes but {} is a good habit we confirm after this ki jitni bhi value hongi combine ho jaayengi and the result comes is 100% 

// {} - target 
// obj1,obj2 - source

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


// but we also not use this one we use the spread way (glass method)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// one more syntax we use when from database value comes
// so when from database the values comes so it look like something they are coming in the form of array of object

// const users = [
//     {
//         id: 1,
//         email : "h@gmail.com"
//     },
//     {
//         id: 2,
//         email : "j@gmail.com"
//     },
//     {

//     },
// ]

// console.log(users[1].email); 


console.log(tinderUser);

// so if we want all the keys of tinderUser object

console.log(Object.keys(tinderUser));  // so the type is array now we apply loop on it
console.log(Object.keys(tinderUser));
console.log(typeof(Object.keys(tinderUser)));

console.log(Object.entries(tinderUser));   // limited use - output array inside array [key:value]


// so by this method - whenver we loop through in object and we nikal rhe hai some value so sometime the value not exist so crash chance more at that time so we simply asked by this method

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// tinderUser.propertyIsEnumerable - repeatble hai ya nhi loop lga skte hai ya nhi 
// there are some methods when we creat object by which we stop the looping 