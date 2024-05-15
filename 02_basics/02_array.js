const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // they are not merge - it does array inside array

// in js array take any data type - so here it takes dc_heros as a data/element so (dc_heros) here array is a single element here

// console.log(marvel_heros[3][1]);   // this is not a good syntax btw


// one more method to add two arrays - concat

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// push work on existing array or push in existing array but concat return a new array

// but if in actual we do this so we also don't use concat



// so here we see - spread operator (ex - glass drop - spread)

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


// so here by using ... they are no more array there each single Element is indiviual now



// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // rare case situation
// const real_another_array = another_array.flat(2)   // convert in a single array - 2 reprsent depth here
// // const real_another_array = another_array.flat(Infinity)  // we also write infinity 
// console.log(real_another_array);




console.log(Array.isArray("Negi"));  // asking it is an array??
console.log(Array.from("Negi"));  // convert it into array
console.log(Array.from({name : "Negi"}));  // convert it into object (intesting) so here we say by using key/value from which way u making this array


let score1 = 100
let score2 = 200
let score3 = 300

// of - returns a new array from a set of elements
console.log(Array.of(score1,score2,score3));


// learn more about this - from, of, isarray
