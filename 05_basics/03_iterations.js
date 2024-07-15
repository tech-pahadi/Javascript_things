// for-in , for-each, for-of loops

// so they all are arrays specific loop - arrays and objects are very powerful and popular

// a common situtation comes here



// for-of 

// string inside array  - ["", "", ""]

// objects inside array  - [ {}, {}, {}] - so inside array we have objects and we get the value from the objects - so first we use loop and then goto inside objects and then using dot notation or square notation get the value


const numbers = [1,2,3,4,5]

// so this loop is not a object acess specific

// here iterator  - simply (i)
// object - so here object use as a very boraded term in which object u want to loop this is not a js object. this is simply a language issue here object is - numbers - and that's it . it automatically end know when the loop end what is the size of the arr and all - we nothing to do 

// for (const iterator of object) {  
// }

for (const num of numbers) {
    // console.log(num);
}


// so common programmer use mostly like this - greet of greetings. num of numbers like this

const greetings = "Hello world"
for (const greet of greetings) {
    if (greet == " ")
    {
        continue
    }
    // console.log(`Each char is ${greet}`);
}



// Maps - it is same like array but little bit inside iteration in that we se later but for now we see how to set values in map and how it look like

// so map is object in - itself - it holds key-value pair and remember the original insertion order of the keys. 
// object don't remember the order  but map does

// map - key in the map may only occur once . it is unique in the map's collection

const map = new Map()
map.set("IN", "India")
map.set("Au", "Australia")
map.set("Fr", "France")
map.set("IN", "India") // so becouse of map are unique so it will not go inside map again
// console.log(map);



// can we apply loop on  and if yes then how 

for (const i of map) {
    // console.log(i);
}

// so here we have fully array comes but we need only diff diff value - so for that we have a shortcut

for (const [key,value] of map) {
    // so here we destructure the the array 
    // console.log(key, ':-', value);
}



// so in a object how we apply for-of loop

const myobj = {
    'game1' : "NFS",
    'game2' : "COD",
    'game3' : "BGMI"
}

// const myobj = {
//     game1 : "NFS",
//     game2 : "COD",
//     game3 : "BGMI"
// }


for (const [key,value] of myobj) {
    console.log(key, ':-', value);
}


// so here it shows an error and show this myobj is not iterable - so there is a way to iterate objects we see later on .
// same error if we create obj with this 2nd method
