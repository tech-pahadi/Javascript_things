// For loop

// for (let i = 1; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`${element} is best number.`);
//     }
//     console.log(element);
// }
// console.log(element);  // not access here





// const array = [10, 20, 30, 40]
for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} & Outer loop value: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }   
}



let myArray = ["Flash", "Batman", "Spiderman"]
// console.log(`Array lenth: ${myArray.length}`);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);    
}




// Keywords - syntax

// it is not mandatory if we start a loop so print all the way from end
// in many cases we see when from database values comes so suppose we 1000 books data comes so 1000 books not we print in one page or not show in one time - maybe we need or show only 5 and the next 5 show on diff. page so many condition like this arise - so many time in condition basis we end the loop

// so break and continue for that

// break

// for (let i = 1; i <= 20; i++) {

//     if (i == 5) {
//         console.log(`Detected ${i} now break`);
//         break
//     } 
//     console.log(`value of i is: ${i}`);  
// }

// continue

for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        console.log(`Detected ${i} now continue`);
        continue
    } 
    console.log(`value of i is: ${i}`);  
}


