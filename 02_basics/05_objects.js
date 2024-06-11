// objects disscussion further converted into api disscussion 


// Destructring objects - array ki bhi hoti hai btw (but very rare)

const course = {
    courseName : "Figma",
    price : 999,
    courseInstructor: "negi"
}

// console.log(course.courseName);
// console.log(course.price);
// console.log(course.courseInstructor);

// but sometimes if we make our code clean so we use other syntax we not using this again and again

const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(courseInstructor);

// if we think this courseInstructor is very big name so we manually also give the name after :
console.log(instructor);


// in react - props

// const navbar = (props.company) =>
// {

// }
// navbar(company = "negi ")

// so this happen in react becouse they think u already learn js and this is same like destructing

// const navbar = (company) =>
// {

// }
// navbar(company = "negi ")



// APIS -  apna kaam kisi ke sar mai daal do
// apis some value coming from backend before the times the values comes in xml and that is very complex structure but now in Json 


// json something look like 
// this is not object thats why error showing later on we hold it in the variables but proper json structure is keys and value is string 

// {
//     "courseName" : "Figma",
//     "price" : 999,
//     "courseInstructor": "negi"
// }



// so now what we do - how we use fethc method in js nd using fetch we call this url and in response we get this data now we know the object concept so we convert it into object and then get one by one the values

// sometimes apis comes in the form of arrays and inside array there are many objects 

// [
//     {

//     },
//     {

//     },
//     {

//     }
// ]

// this is one of the apis
// random user generator - https://randomuser.me/

// and understand that apis we spend some time some online tools also avail to understand this
json formator - https://jsonformatter.org/


// these all apis is - json format (javascript object notaion)

