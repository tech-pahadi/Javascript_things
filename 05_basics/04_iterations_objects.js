const myobj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    py : "python"
}

// so due to the objects. iterate not work in for-of loop we use for-in - that's doesn't mean for-in loop always we use for objects iteration


for (const key in myobj) {
    // console.log(key);
}

// for (const key in myobj) {
//     console.log(key, ':-', myobj[key]);
// }

// so here we have one doubt can we use for-in loop for arrays or not

const myarr = [1,2,3,4,5]
// for (const i in myarr) {
//     console.log(i);   // so here it is not pick the array values it simply print the iteration from 0
// }

for (const i in myarr) {
    // console.log(myarr[i]);   // so this is the major diff b/w these two loops
}


// can we use for-in loop in map too ??



const map = new Map()
map.set("IN", "India")
map.set("Au", "Australia")
map.set("Fr", "France")
map.set("IN", "India") 
// console.log(map);



// can we apply loop on and if yes then how 

for (const i in map) {
    console.log(i);   // so due to map is not iteratable we will not write like this in loop (trike hai but we will later on check these things)
}
