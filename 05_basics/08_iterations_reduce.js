// Reduce - when we use shopping cart and all

// The reduce() method of Array instances executes a user-supplied "reducer" 
// so this reducer is a keyword we further see in react


// mdn code

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10



// so here in parameter the currentvalue represent the current value of array like - 1,2,3,4
// and accumulator is like an empty variable jo hme diya jata hai now which intial value we insert on it - so firest time the intialvalue accumulator ke andr chli jaati hai like in this case - 0(zero) then current value = 1 and from next time the accumulator only ask once from second chance whatever the sum of first current-value and accumulator they daal deta hai usko in the accumulator - so the final sum is inside accumalator which is in this case is = 4+3+2+1 = 10





const myNums = [1,2,3]

const myTotal = myNums.reduce( (accumalator,currentValue) => {
    console.log(`Accumulator is: ${accumalator} & the Current-value is: ${currentValue}`);
    return accumalator+currentValue
},0 )

//  but due to acccumulator don't know from where i am going to start this so for that - assign 0 at the end of the function 

// console.log(myTotal);



// so  this all work in shopping cart bills add all of them - same thing we do with our for-each and then push those value add kr kr ke - but this method is good


// Now try to write in arrow-function form

const myTotal1 = myNums.reduce( (accumalator,currentValue) => accumalator + currentValue, 0)
// console.log(myTotal1);



// one more example

const shoppingCart = [
    {itemName: "Js course", price : 2999},
    {itemName: "C++ course", price : 3999},
    {itemName: "Python course", price : 4300},
    {itemName: "React course", price : 5499},
    {itemName: "NextJS course", price : 6499},
]

const totalCoursePrice = shoppingCart.reduce( (acccumulator,item) => {
    console.log(`Accumulator is: ${acccumulator} & the Current-item-price is: ${item.price}`);
    return acccumulator + item.price
} ,0)

console.log(`Total price to pay: ${totalCoursePrice}`);