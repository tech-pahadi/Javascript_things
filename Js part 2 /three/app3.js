const parent = document.querySelector('.parent')
// console.log(parent);

// it means how many childrens are there inside parent class or whatever the parent is - and this is HTMLCollection which is array like propety
// console.log(parent.children);

// so now we select these childrens easily
// console.log(parent.children[1]);

// ig we want to change the innerHtml we can easily change too
// console.log(parent.children[1].innerHTML);

// so our classic for loop we use here i know these is HTMLCollection but our classical for loop to chal hi sakta hai - if we want to loop through
// HTMLAllCollection so we need to convert using Array.from method

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML)
// };

// we can also change the style and lot more
// parent.children[1].style.color = "orange";


// there is not only children propertue there there is a lot more letseee :

// so by using these we see our firstelement child which is monday offcourse
// console.log(parent.firstElementChild);

// and this is for lastelement child
// console.log(parent.lastElementChild);

// so in above code you see how we go from parent to child - but we also move from child to parent too

// const day1 = document.querySelector('.day')
// console.log(day1);

// so by using this we go from child to parent 
// console.log(day1.parentElement);

// and these is for next sibling means monday next tuesday and tuesday next wednesday
// console.log(day1.nextElementSibling);


// Suprise things:
// How many nodes of the parent  so the output of these is nodelist with all the line breaks which is denoted by text in the nodeList becouse 
// it take break as a text so yes 

// like dom - document Object model - so each and everything have their own importance
// so browser bts make very complex tree structure that's why poeple saying like - we want more optimize js - becouse webs is not that optimize - and 
// never happen too becouse they do a lot of work but bts

// and yes we we give one line break and then after that we give more break lines too but browser count only one line break  

console.log("NODES: ", parent.childNodes);


// Jo bhi hmara react bna hua hai - when we open react github open then we see there  is many manipulation insert into memory using  through childnodes


