// console.log("R");
// console.log("A");
// console.log("V");
// console.log("I");

// function defination

// function sayMyName()
// {
//     console.log("R");
//     console.log("A");
//     console.log("V");
//     console.log("I");
    
// };

// function refrence - sayMyName  &  execution is - ()
// sayMyName();



 
// function addTwoNumbers(number1, number2)
// {
//     console.log(number1+number2);
// //    //    return number1+number2
// }

// function addTwoNumbers(number1, number2)
// {
    // let result = number1+number2
    // return result
    // return(number1+number2)
    // console.log('Negi');  // -  so it ain't work becouse once function return it exit the function
// }

// these 12 and 12 are arguments
// addTwoNumbers(12,12);

// now js will use her own mind
// addTwoNumbers(12,"12");
// addTwoNumbers(12,"a");
// addTwoNumbers(12,null);



// parameters & arguments 

// parameters - when we creat function defination and inside it whatever we take input not number we take anything so we called it as a parameters

// when function call and pass the value inside it we called it as a arguments


// can we store result in a variable

// addTwoNumbers(12,12);
// const result = addTwoNumbers(12,12);
// console.log("Result value: ",result);  // undefined - becouse these function not return that value




// let's do more

// name = "Ravi" // default value is "Ravi" if we not pass anything

function loginUserMessage(name = "Ravi")
{
    if(name === undefined)
    // if(!name)
    {
        console.log("Plzz enter a username");
        return 
    }
    return(`${name} Just logged in`)
}


console.log(loginUserMessage("Negi"));
// console.log(loginUserMessage());   // undefined