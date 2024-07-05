// 2015 - ES6 (Arrow function feature come) & also these Keyword in this lecture

// These keyword - know about current context 
// So to understand arrow we know these and to understand these we move to object and understand


// Arrow function

const user = {
    Username : "Ravinder",
    Price : 199,

    WelcomeMessage: function()
    {
        // so these simple refer the current context
        // so here current context is username
        console.log(`${this.Username}, welcome to website.`);

        // so here this refer simply the current context so from line no. 10 to 20 these all are current context
        console.log(this);
    }

}

// inside arrow function there is no - these  but why not and if hota hai so what refer that ?? we later on see

// user.WelcomeMessage()

// so here it print - Negi, welcome to website. becouse we not hardcode the value here we only tell whatever the current context text and inside that whatever the username value print that value - so here we change the value/context

// user.Username = "Negi"
// user.WelcomeMessage()

// so here we are in node enviroment so the current context here is - empty {} so these refer to empty object . becouse in the global there is no context so that's why empty
// console.log(this);


// but but when the begginers learn the js in browser so they have in problem at this time 
// when we run the same command in dom so it show - window so these is comes becouse in past there is only one way to excute the js inside browser the engine which excute js these found only one place which is inside browser but now we insert that engine and give diff. diff. name to these - node,deno, bun so now we have standalone engine so whenever that engine run inside browser so the mosta global object is window (interview question) that's why we capture all the window things right understand - click, form submit are the examples....


// Now we move on - Arrow function these is only pre-requisite (sart)


// function chai() {
//     let username = "Negi"
//     console.log(this);

//     // so here it shows - undefined becouse it works only in object - here we not use this like that
//     console.log(this.username);
// }

// so here too many values we see - so when we run this inside the functions - inside node enviroment so here we have see too many values - so yes there is too many things inside this and we acess them
// chai();


// before we define function

// const chai =  function () {
//        let username = "Negi"
//        console.log(this.username); 
// };

// chai()


// after arrow function comes in the picture

const chai = () =>
{
    let username = "Negi"

    // so here same problem comes 
    console.log(this.username); 

    // same empty thing appear
    console.log(this);

    console.log("Hey, Negi what's good");
}

// chai();


// Pure arrow functions Discussion

// basic arrow function - 1st way (these is also explicit return)
// const addTwo = (num1,num2) => 
// {
//     return num1+num2  
// }

// console.log("Sum of num1 & num2 is: ",addTwo(3,4)); 

// implicit return arrow function - 2nd way  (implicit means - I assume you don't need to write.)
// const addTwo = (num1,num2) => num1+num2   

// if the above one is confusing so we also do this way 
// const addThree = (num1,num2,num3) => (num1+num2+num3) 

// console.log("Sum of num1,num2 & num3 is: ",addTwo(3,4,5)); 

// so when we learn react - so these two things which happend above we use more & more - like if we apply curly braces so we write return or if not so we have no need to write return


// so here what if we want to return object 
// const objreturn = (num1,num2,num3) => {username: "Negi"}
// console.log(objreturn(2,3));   // undefined - becouse we can't return the object like this

// to return object it's mandatory to wrap in the parantesis
const objreturn = (num1,num2,num3) => ({username: "Negi"})
console.log(objreturn(2,3));



