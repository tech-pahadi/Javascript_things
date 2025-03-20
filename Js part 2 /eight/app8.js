// const sayNegi = function(){
//     console.log("Negi ji", Date.now());
// }

// setInterval(sayNegi,1000);

// we have also a third parameters in setInterval 

const sayNegi1 = function(str){
    console.log(str, Date.now());
}
let intervalId = setInterval(sayNegi1,1000,"Hii");

// same like clearTimeout we have clearInterval

// clearInterval(intervalId)

document.querySelector('#start').addEventListener('click', function(e)
{
    setInterval(sayNegi1,1000,"Hii");
})

document.querySelector('#stop').addEventListener('click', function(e)
{
    clearInterval(intervalId)
})


