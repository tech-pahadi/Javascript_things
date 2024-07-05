// Nested scopes and closer and for that we are good in DOM


// function one()
// {
//     const username = "Ravi"

//     function two() {
//         const surname = "Negi"
//         console.log(username);
//     }
//     // console.log(surname);
//     two();
// };

// one();


// so here when one is executed then the two execute 

// so when we declare function like this and then call so there is a seprate call stack create means different scope bnega - we see later on

// and this is closer is widely spoken about  - our inside function acess the external function but not these complete there is a lot more concept behind this


if (true) {
    const username1 = "Ravi"

    if (username1 === "Ravi") {
        const surname1 = "Negi"
        // console.log(username1 + surname1);
    };
    // console.log(surname1);
}

// console.log(username1);



// ++++++++++++++++++++++  interesting  +++++++++++++++++++++++

// before creating function we call - no error
// addOne(5)
// console.log(addOne(5)); 

function addOne(num) {
    return num + 1
}
// addOne(5)
// console.log(addOne(5)); 

// this is also function but sometimes we called it as a expression - this is kind of variable in js variable is so powerfull they hold anything - json values , functions & many more

// before creating function we call - show error
// addTwo(5) 

const addTwo = function(num) {
    return num + 2
}
addTwo(5)


// so here we declare through variable so it show error - so it is a concept called hoesting - how funciton decalre where we store that what is there execution context how js treat variables - how a final tree make where all the variables,functions - all we see later on