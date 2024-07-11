// How code execut - the call stack how they excute this is the only story 

// 1st -  excecution context - how does this code excute - divide in 2 parts
// 2nd - call stack - we have memory how the function goes inside and how excute they are & how they come inside - we see in the browser - how we add js files and also visuliaze how the call stack wgera use ho rha hai


// Javascript execution context:
// whatever file we make how js run/excute that - so for run js run the programme in 2 phase 

// whenever we give any code to js - so first thing make always and always and that is - global execution context

// nd whereever this global execution context make this refer to variable (this)

// so now here the interview question is like this - so becouse of browser global execution context are slighlty different and node js enviroment have different - bun,dino so all the enviroment like this they all have diff. global execution context - so browser have more important so in that this value is window object

// becouse some times when we learn react so our react code not working becouse we render in server side and there we have not any window object access

// so this all excute inside a thread - how we see later (how they work on single thread)

// js - is single threaded (all the things here is process)


// but first we the execution context

// 1st - global execution context
// 2nd - function execution/executional context

// this is more enough but in mongoos there is one more context there - which we only know
// 3rd - eval execution context - this is property in itself of global object


// now the js code run in 2 phases

// 1st - memory creation phase / creation phase   - only the variable or whatever we decalre for that jaghah allocate hoti hai not excute (like - +,- etc. etc. they all done in execution phase)
// 2nd - excution phase 

// so now example for this 

let val1 = 10 
let val2 = 5
function addnum(num1,num2) {
    let total = num1 + num2 
    return total 
}

let result1 = addnum(val1,val2)
console.log(result1);
let result2 = addnum(4,4)
console.log(result2);


// so lets go to these step 

// phase 1st - global enviroment/execution and allocate in this (hoga hi hoga basic hai)
// phase 2nd - creation phase/ memory creation phase
// so val1 come first and undefined goes inside it 
// then val2 - same undefined

// now line no - - 3 addnum
// so there is no value assign in addnum
// addnum - function defination goes inside it (from line 41 to 43)

// result 1 - undefined
// result2 - undefined

// this is first cycle



// 2nd - now execution phase

// val1 <- 10 
// val2 <- 5
// and now line no 41 to 43 no work - becouse there is nothing to excution there - becouse we already hold the defination 
// result1 - insert addnum but addnum is a function so when we say we are reached addnum so addnum do their own execution context - so now hmare liye bnega a new enviroment + execution thread

// jitni baar function execute honge utni baar hmare liye ye box creat hoga - aka new excutional context nd inside it ( new enviroment + execution thread )
// so now ye 2 kaam dubara honge - 1st memory-phase , 2nd - execution phase - which is excuted for addnum() - jitni baaare hum function likhenge utni baar hoga beocuse global defined only one time

// and yes important note : after creat this sandbox/executional context they delete also 

// now again memory phase for - addnum

// val1 - undefined
// val2 - undefined
// total - undefined

// execution context/phase - addnum - now the actual processing and excution happen (mathmatical , data manipulate etc etc excute hota hai)

// num1 <- 10 
// num2 <- 5 
// total <- 15 - (now this is total also return back in their parent execution context - wese bolte hai ki global execution context mai hm return krte hai )
// so the total thing we return in our global execution context



// now again the function call in last line so again - the sandbox created and then inside it - a new varibale enviroment + thread (js all execution here)

// now 2 phase again come - 1st memory phase , 2nd execution context/phase - now again the same story happen.- again the memory phase -  val1,val2,val3 - undefined and then. excution context - value changes but in actual same thing happen again. then the total come - again and then the total go to global execution context mai jaayega..





// Now call stacks topic : 

// so here lifo concept chlta hai  - last in first out
// so here is the example 

// go to browser - inspect Element - source - and then snippet -  creat new snippet 

function one() {
    console.log("One")
    two()
}

function two() {
    console.log("Two")
    three()
}

function three() {
    console.log("Three")
}

one()
two()
three()


// we see again this one 








