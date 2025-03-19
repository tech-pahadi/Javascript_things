const sayNegi = function(){
    console.log("Negi ji");
}

setTimeout(sayNegi,2000); // only give the refrence not excute the function like () in settimeout we run the code only ones after a particular timeout. 


// but in setInterval after a particular interval it runs again and again 


// const h1 = document.querySelector('h1')
// h1.innerHTML = "negi hai kyaa"; // there are also new methods in market like setHTML but browser can't support for now those methods

// now we want after 2 sec this thing happen 

const changeH1 = function(e) {
    const h1 = document.querySelector('h1')
    h1.innerHTML = "negi hai kyaa"; 
}

const changeMe = setTimeout(changeH1,2000); 

// so in many sites the pop-up comes after a certain time like discount things and all so all these via setTimeout

// but the problem is many times the tutorial is end here we know about the start timing which is for now we take as 2 sec but how to stop that if we want to stop that setTimeout if that thing not event in that particular time so we have a option to stop right so for that we have - clearTimeout

// clearTimeout(changeMe)
// so clearTimeout need a refrence which timeout we want to stop - but to do this way this is not a good way right becouse first we use setTimeout and now clearTimeout so what's the good thing happen here - so we apply this on some event

document.querySelector('#stop').addEventListener('click', function(e)
{
    clearTimeout(changeMe)
    console.log("Stopped!");
    
})