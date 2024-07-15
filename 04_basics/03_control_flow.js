// truthy or falshy


// trukevalue and falsee value - concept arise here - some value we assume ye shi hoga ya ye galat hi hoga


const userEmail  = "negi@ai.com"

// const userEmail  = "" // not execute it assume to be a false value
// const userEmail  = [] // execute here in empty array


if (userEmail) {
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}

// but here we not write true or false and also not check the consdition so how - Got user email - execute - so here we assume we have string so this is true value - so when we assume inside string ture value - if empty string so it means false no value there


// so there is a concept/rule bts in this :

// falsy - false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy - "0", 'false', " ", [], {}, function(){}




// Array way to check - how we check array (empty or not)

const userEmail1 = []
if (userEmail1.length === 0) {
    console.log("Array is empty");
}


// Object way to check - how we check Object (empty or not)

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) :: (null and undefined - puri kahani)

let val1;
val1 = 5 ?? 10  // 5 output - so what is the main purpose of this ?? sign - so sometimes if we call from database and from use firebase or appwrite so we have not get the direct response - we get 2 value so chances is null response we get or maybe no reponse comes - undefined aa jaye so in that case our total codestructure pareshaan ho skta hai 

// so for that cases this thing creats - if null so assign null on that tb jaake mai use hisaab se handle the case or undefined hai to theek hai wrna koi value ho to usko assign kr du - so in that special case which we later learn on database - so we see how ir works

val1 = null ?? 10  // 10 output - so here safety check they do becouse maybe if we take null so in null bases maybe some program not run or in fututr problem creat so it will take 10 - so carefull it will be designed - right now here we see 10 but in actual it will not happen bts we use complex function and then then database call that function and from there value comes if comes then it's good if not so assign null - tb jaake us hisaab se aage ki situation handle kr le


val2 = undefined ?? 15 // output - 15

val = null ?? 10 ?? 10 // so in that case whatever the first value it get first - they simply assign that value first // output 10

console.log(val1);
console.log(val2);



// terniary operator - remember this is not Coalescing Operator (hte design of terniary operator is differ , pattern diff. , goal diff)

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More then 80"); 