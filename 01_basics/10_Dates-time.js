// Js pain point hard to understand but not tha hard 

let myDate = new Date()
// console.log(myDate);

// conversion 
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());


// console.log(typeof(myDate));


let myCreatedDate = new Date(2001,0,24);
let myCreatedDate2 = new Date(2001,0,24,5,2);
let myCreatedDate3 = new Date("2025-08-24");
let myCreatedDate4 = new Date("08-24-2025");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());


// convert it into seconds these is a interview question 

// console.log(myTimeStamp/1000);
// console.log(Math.floor(myTimeStamp/1000));




let newDate = new Date()
console.log(newDate);
// console.log(newDate.toLocaleString());
console.log(newDate.getDay());
console.log(newDate.getMonth()); 



// ${newDate.getDay()} and the month is

// we customize like we want 

// newDate.toLocaleString('default',
//     {
//         weekday: "long"
//     }
// );