// const score = 100
// console.log(score);


// const balance = new Number(100)  // nothing happend in output but now we 100% sure the varibale type here is number - it specially show the number in the output and also advant. is we see the properties define also in browser 
// console.log(balance);


// console.log(balance.toString());
// console.log(typeof balance.toString());
// also we do this also
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));  // precision value - to fixed we use a lot of times specially when we make ecommerce website so there all the calculations , gst & all the precision value is too long so client not use to that precision too much so thats why we use



// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2));



// const hundreds = 1000000
// sometimes it is difficult to calculate this - how many zero's are there so for that
// console.log(hundreds.toLocaleString());
// so this comma is default to US standards
// console.log(hundreds.toLocaleString('en-IN'));  // to conver in indian type (indian number sysytem)




// Max and min value how much we take it - for competitive coders

// Number.EPSILON
// Number.MAX_VALUE
// Number.MIN_VALUE


// ******************* Maths library - by default comes with js ******************* 

// console.log(Math);    // object in itself and there are many object inside it also
// console.log(Math.abs(-4));   // abs - absolute value - negative value change to +ve sign chnage only work in negative not +ve to -ve
// console.log(Math.round(4.3)); 
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2));      // ceil - upar (jara sa bhi upar hua sidha upar wali value )
// console.log(Math.floor(4.6));     // floor - opposite to ceil
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,3));

// console.log(Math.min(4,3,1,6,2));
// console.log(Math.max(4,3,1,6,2));


// we use this math library most - in random
// console.log(Math.random());   // always comes the value b/w - 0 & 1

// for example we make dice game so at that time we need 1 to 6 value so how we do that ??
// console.log(Math.random()*10); // but this is wrong becouse lets say the value is - 0.04 so at that time the condition is wrong becouse random is just choose values b/w 0 - 1 (0 itself too)

// so for that we do 

// console.log(Math.random()*10 + 1);   // so now here this statement also wrong becouse it always sometimes exceed 10 becouse maybe it follow the brackets and all BODMAS rule there

// console.log((Math.random()*10) + 1);   // sometimes we need too much after dot value so for that we do
// console.log(Math.floor(Math.random()*10) + 1);  


// trick we need to know - generic syntax formula

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+10);