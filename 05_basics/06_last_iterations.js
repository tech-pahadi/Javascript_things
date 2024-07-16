// more loops and some more intresting things 

// for-each loop and also some basic filter,map,reduce

const coding = ["js","python","ruby","java","cpp"]

// coding.forEach((item)=>{
//     console.log(item);
// })

// but what if we want to store this in some variable


// const values = coding.forEach((item)=>{
//     console.log(item);
    // return item   // output - undefined - so it means for-each loop not return any value

    // but this is not the same case always that we print the value of an array or bhi koi kaam ho skta hai kraane ko - like give some temp condition like if the name java then return kro wrna mt kro - so jo hum pichle video pe confidence the ki for-each loop se  array ka kaam ho gya ab sb ho jayega wo to dhra ka dhra rh gya - to kya wapas se for loop pe jana pdega - no the js developer/core community know about this situation - so in that case hmara ye kaam rh jata hai
// })

// so what for-each loop return this is intresting to seee

// console.log(values);




const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter also take callback inside it

// myNums.filter((num)=> num > 4) // so here it will not say store me anywhere or i need an value so it return basically the value - same condition also with in for-each but wo wapas nhi krta values - ye krta hai return


// const newNums = myNums.filter((num) => num > 4) 
// console.log(newNums);

// so we have a call back function in filter which is - ((num) => num > 4) this - in which each value acess and then give a condition - those who staisfy that condition that values can be return - this is filter basic


// same thing - but in for loop it ain't work - show undefined

// const values = coding.forEach((num) => num > 4)
// console.log(values);




// const newNums = myNums.filter((num) => {
//     num > 4
// })
// console.log(newNums);

// but why the array empty here - so becouse of implicit and explicit return concept this happen - so becouse of we start the scope by using curly braces we need to write return


const newNums = myNums.filter((num) => {
    return num > 4
})
// console.log(newNums);


// but now if the same thing we do via using for-each so how we do

const newNums1 = []
myNums.forEach((num)=>{
    if (num>4) {
        return newNums1.push(num)
    }
})
// console.log(newNums1);    // so the same result appeat here - little bit logic and syntaxy - so there is no bad or good way to do anything - the only thing if it happed then well n good 



// more examples on filter

// so here we have arraya and inside it so many objects are there 

// so the same kinda value we get from database - now user apply some filter on their webpage so how we do it using filter letess seee

const books = [
    {title: 'Book One', genre: 'Fiction', publish: '1981', edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: '1992', edition: 2008},
    {title: 'Book Three', genre: 'History', publish: '1999', edition: 2007},
    {title: 'Book Five', genre: 'Science', publish: '1989', edition: 2010},
    {title: 'Book Six', genre: 'History', publish: '2001', edition: 2006}  
]

// const userBooks = books.filter((BK)=> BK.genre === "History" )

// console.log(userBooks);  // So this is real-world it is some people say this is a project

// now filter those values which is pulish after 2000

const userBooks = books.filter((BK)=> {
    // BK.publish === 2000  // this will not work here  - becouse out of scope - so we write simply return
    return BK.publish <= 1995 && BK.genre === "Science"
}
)
console.log(userBooks); 



