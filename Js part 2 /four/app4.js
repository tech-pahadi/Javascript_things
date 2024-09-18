// we create a div element
// once we know how to create element then we easily use loop and function on it 

// const h1 = document.createElement('h1')
// console.log(h1);


const div = document.createElement('div')
console.log(div);

div.className = 'main'
// div.id = "myid"

// just fun
div.id = Math.round(Math.random() * 10 + 1)

// add some more attribute or custom attribute 

div.setAttribute("title", "genrated-title")

// give some style too 
div.style.backgroundColor = "blueviolet"
div.style.color = "white"
div.style.padding = "10px"

// we do all of this but still our div not show in our page why ??
// becouse we create a div which is for now inside the memory not in page 

// so how it comes to the page - so when we say to the document - attached this page apne pass 
// so lets do attaching

// but first if we do this so is this wrong - so there is problem - not preferred

// div.innerHTML = "Tech Pahadi"
// when you do this way so actually it overwrite the value - jo bhi value wha pe hai first it select krke laata hai and
//  then if we set so it set the value do baar chize ho rhi but 

// this setAttribute us value ko nhi laaata ye direct set kr deta hai so one round trip bachta hai yha pe - preferred one
// div.setAttribute("title", "genrated-title")


// so we do like this 

// so there is a lot of debate in this code too why??
// kuch log khte hai sidha innertext likh do yha pe bhi to do round trip ho rhe  - so these is different thing diff. approach for now
// both are goood
const addText = document.createTextNode("Tech Pahadi")
div.appendChild(addText)

document.body.appendChild(div)


// so once our this div create so we easily wrap up all these and make a function - create a new div - in that fucntion we pass arguments what text
// we give here or backgroundColor whatever it is - and make a loop and say that ki tum 5 baar chalo and give you this this color array and 
// ye text de rha hu iske baad kuch nhi hai mast chlega