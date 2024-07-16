// Maps and reduce

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// add 10 on all this array values - lets example

// map is also a call back function and it is easy and also very good as compare to for-each

// the good thing is they returned the value automatically

const newNums = myNumbers.map((num) => num+10)

// also do this method - if open scope 

// const newNums = myNumbers.map((num) => {
//     return num+10
// })

// console.log(newNums);

// now take the books example u also do here  


// chaining method

// so can we do this way - so yes and that's why it is chaining - so yes we apply 2-3 method one after one

// const newNums1 = myNumbers.map().map().filter()

// now use one by one

const newNums1 = myNumbers
        .map((num) => num*10 )
        .map((num) => num+1 ) // so this num value is not the value is in array the value of this num is whatever methoda applied on the above of this and whatever value pass from there - in this case (num*10) - .map((num) => num*10 ) so this is 1st chain and all these values pass on 2nd chain - now we want more chaining so for tha we do 
        .filter((num)=> num >=40 )
        
console.log(newNums1);