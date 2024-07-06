// Immediately Invoked Function Expression - IIFE

// the time we write function we excute at instantly that - now there is many ways to do this and why we this type of function which immidiately excute - so there is many times we do this type of things

// Specially some time we write files inside which only database connnection there - and we want the time our appli. start wese hi us file ke andr hmara database ka connection start ho jaaye.

// This is not only the things there is many time when global scope have some variables declare and we write something in that function and we do not want in the function the global varibale occur some problem becouse bacche to bdo se maang sakte hai...  so whatever we declare in the function they pollute by global scope - so we don't want pollution by global scope 1st and we make our alg scope becouse in function scope to bn hi jata hai and + we want they excute immediately


// function chai() {
//     console.log("DB CONNECTED");
// }
// chai()

// so there is no problem here our db connect instantly 

// but what we do for global scope polluted thing - so for that we write iffe

(function chai() {
    // This is named iffe becouse chai is the name here
    console.log("DB CONNECTED");
})();

// () - 1st function where we write the function defination
// () - 2nd execution call

// so in interview we not only say that the function instant excute we also say to save from the global scope pollution

// so now here one problem comes -  we say we also write in arrow way

// nd when we run the above and this function at the same time it shows error becouse - the iffe envoked sucessfully but they do not know where we stop the context so in this situation we end in js by ; - the above one

// (()=>{
    // simpled iffe - unnamed iffe
//     console.log("DB CONNECTED 2");
// })();


// this thing


// ((name)=>{
//     console.log(`DB CONNECTED ${name}`);
// })("Negi");

// same like 

function hello1(name) {
    console.log(`Hello my name is, ${name}`);
};

hello1("Ravi");


// only see the above*2 one as a function