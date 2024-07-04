// common situation - shopping cart we add the items and their name and price are endless so we don't know how long they going so in that situation we ready our parameters

// so these 3 dots are represent rest operator and also spread operator too but right now we use rest


function calculateCartPricenum1 (...num1)
{
    return num1
};

console.log(calculateCartPricenum1(2));
console.log(calculateCartPricenum1(200,400,500));  // - only first item comes so in this case we have a rest operator   - so now we take all these values in array and in future we apply loop on array and also add them



// objects pass in functions and use them

const user =
{
    username : 'Ravinder',
    prices : 199
};

function handleObject(anyobject)
{
    console.log(`User name is ${anyobject.username} & price is ${anyobject.prices}`);
};

// handleObject(user);

// so typesafety also important in this case that's why people prefer typescript - becouse if in object we type price and inside functions we type prices so in this situation wr check typesafety


handleObject(
{
    username : 'Jio',
    prices : 699
})


// pass the arrays inside the functions


// const myNewArray = [12,45,32,78]

// here myNewArray is a generic name the thing matter is what we write inside parameter

function returnSecondValue(getArray)
{
    // console.log(`The array value is:  ${getArray[3]}`);
    return getArray[1]
};

// handleArray1(myNewArray)
console.log(returnSecondValue([12,45,32,78]));

