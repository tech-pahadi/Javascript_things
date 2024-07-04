// common situation - shopping cart we add the items and their name and price are endless so we don't know how long they going so in that situation we ready our parameters

// so these 3 dots are represent rest operator and also spread operator too but right now we use rest


function calculateCartPricenum1 (...num1)
{
    return num1
};

console.log(calculateCartPricenum1(2));
console.log(calculateCartPricenum1(200,400,500));  // - only first item comes so in this case we have a rest operator   - so now we take all these values in array and in future we apply loop on array and also add them


  
