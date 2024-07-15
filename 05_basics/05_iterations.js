// for-each loop

const coding = ["js","python","ruby","java","cpp"]

// so most of the time we use this for arrays - actually some loops in arrays directly add in their properties wee see later on this things

// so when we dropdown this thing when we print on our browser - the proptoypes open their and in prototype their are a lot of things - like .length(), map, fill, and same. like for-each(so this is also a parameter of loop which is by default inject - becouse all people know if array come so we use loop in array also)



// so hum isko kaam mai lenge but these is slighlty higher-order function
// so all the methods after . shown in the screen

// so in foreach it says- callbackfn - give me a function what i do 
// so these function have too much ideas - like what the length of the Array, and start with 0 and etc etc 

// so becouse of call back function - first no name there so we remove function name then in function the parameter becouse it is in array so automatically these loop is too smart so it will not need - ye chla jayega - now har value ko kya bolna cahte ho - jo man kare wo bolo - i/item/num anything

// now automatically these function execute everytime and every time the array values it will leke aayega as a parameter now whatever you do with that value in function body u do 

// coding.forEach(function name(item) {
//     console.log(item);
// } ) 

// now another variation of these - this is basic like how we load the value inside it but this is not the only way to write function so we use

// arrow function with for each

// this is the syntax of arrow function now here in for each first remove the name of the function

// coding.forEach((negi = () => {
//     console.log(item);
// } ) 


// coding.forEach((item) => {
//     console.log(item);
// } ) 


function printMe(item) {
    // console.log(item);
}

// so can we pass on these function  ??

// coding.forEach(printMe)

// give only the reference of that function - not excute by using ()



// Now more intresting things

// so here item is the not only parameter it have . there is a lot parameter/values too it have.

// these all 3 are parameters :

// 1st acess - items 
// 2nd acess - indexes
// 3rd acess - full array list (not usually use)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )


// Now these situation we talk about which we see in past

// [{}, {}, {}] - so these use in for-each a lot

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
]

// so these all 3 are objects inside array - and we have now see the iteration on it becouse it is very common opeation all the database value which comes they all are in array format and each and every value is an object

myCoding.forEach((item)=>{

    // console.log(item);
    // so becouse of item is now or we have acess of that object (myCoding) and in that object there are 2 properties write on (languageName , languageFile ) and the object name we say here is item so in all iteration we say that object - item so 

    // console.log(item.languageFile);
})


// this will help in database a lot becouse in db an array come and inside it their are a lot of properties comes