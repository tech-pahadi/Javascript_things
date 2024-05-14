const myArray = [0, 1, 2, 3, 4, 5, true, "negi"]
// console.log(myArray);


// array is object in which we store collection of multiple items/elements into a single variable

// js array is resizable and also mix data types contains too
// js array are not be associative arrays - array elements can't be accessed by arbibtary strings as indexes..

// console.log(myArray["one"]);   // wrong
// console.log(myArray[0]);

// Zero based indexing

// js array copy operations creat shallow copies


// diff. b/w shallow copies and deep copies

// shallow copies - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 

// deep copies - A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 



// ************* Array Methods *************

const myHeroes1 = ["negi", "rawat", "bisht"]

// one more way to declare arr

const myHeroes2 = new Array("shaktimaan", "naagraj")

// in array we get a lot of things - prototype[Array] , length propertie, further proptype[object]

// console.log(myHeroes2[0].length);
// console.log(myHeroes2.length);



// Array methods

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);

// myArray.pop()  // no argument need it simply remove the last element of the array
// console.log(myArray);

myArray.unshift(9)  // insert in the starting index of the array - but there is some disad. of this like i feel maybe our array size is 1000's elements so all the elements shift one by one and it is too much time consuming and our system also takes some load by this but sometimes we use this in small sizes array

// but yeah optimize is differenet thing first our code is excuted if propely it is the WIN to we all 

// console.log(myArray);

// myArray.shift()   // the element is remove first element (0th index)
// console.log(myArray);


// Quaotioner methods  - we ask the questions to this methods and they answer in true or false 

// console.log(myArray.includes(9));    // boolean type 
// console.log(myArray.indexOf(9));    // 


// Add all the elements of an array into a string

// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);

// console.log(typeof myArray);
// console.log(typeof newArr);



// slice - returns a copy of a section of an array
// splice -  

console.log("A", myArray);

const myn1 = myArray.slice(1,3)  // include 1 and 2 not 3
console.log(myn1);

console.log("B", myArray);


const myn2 = myArray.splice(1,3)  // include 1 and 2 and 3 but this is not only the diff. b/w slice and splice
console.log(myn2);

console.log("C", myArray);  // the array change here due to splice this is the imp. difference


