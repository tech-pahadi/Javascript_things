// String modern syntax :

// const name = "ravi"
// const repoCount = 50

// console.log(name + repoCount + "value");  // this is not a good syntax now becouse it is outdated the + and then again + this is outdated

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);   // string interpolation here comes into the picture we make placeholder and directly add the value there in backend and all we use this - the advantage of this lot of things we done on the go for ex.


// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


// how to declare string 2nd way

// const gameName = new String('negi-boi')  // we use new so we use object of js and then string and uske constructor ke andr string de diya

// console.log(gameName);


// so the advantage of this string declare method is in Inspect element :

// hme length properite milti hai and there is a lot of methods also we find in browser - key value pair and a lot of. things

// so to masterthis all the method is known as study of string

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.endsWith("i"));
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("b"));
// console.log(gameName.__proto__);


// more strings method we know is better to us just go to browser and see there



// const newString = gameName.substring(0,4) // not using neg. value its obey the neg. value and start with 0.

// console.log(newString);

// const anotherString = gameName.slice(0,4)    // we also give the negative value
// console.log(anotherString);

// const newStringOne = "    ravi    "
// const newStringTwo = "negi"
// console.log(`Hy my name is ${newStringOne.trimEnd()}  ${newStringTwo}`);
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trim);


// const url = "https://negi.com/negi%20boi"

// so let say if someone name there website is - "https://negi.com/negi boi" now the browser not understand the spaces so browser autmatically conver the space place into %20 
// "https://negi.com/negi%20boi" to this.. (url encoding) so for that changes 


// console.log(url.replace("%20","-"));
// console.log(url.includes("negi"));


// const myUrl = "https://negi-boi-pahadii-uk07-devbhooomi.com"
// console.log(myUrl.split("-"));