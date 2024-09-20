
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    
    // document.querySelector('#images').addEventListener('click', function(e){
    //     console.log(e.target.tagName);
    //     if (e.target.tagName === 'IMG') {
    //         console.log(e.target.id);
    //         let removeIt = e.target.parentNode
    //         removeIt.remove()
    //     }
    
        
    // })
    
    //removeIt.parentNode.removeChild(removeIt)




    // in interviews there are many times a basic question creat in front of us - like make an application where user jis time pe bhi is image ya body pe click kre to uska time mujhe bta do - now people confuse like i how we do it in react but ye react mai krna hi nhi tha ye to basic js ka ek line ka code hai  

    // document.getElementById('owl').onclick = function(){
    //      alert("owl clicked")
    // }, false)

    // so becouse now there is a lot of events comes so lets understand which are the main ones in events 

    // 1 - type - many time keyboard/mouse ke type hote hai or bhi kuch hote hai to learn this
    // 2 - timestamp - how to change date activities so learn this 
    // 3 - defaultprevented - jo default behaviour hota hai usko change kr skte hai - like when we fill the form and submit that
    // so wha hum event ko bolte hai ki defaultprevented kr do tab jake wo sumbit na ho jaaye - same when we click on anchor tag and then navigate kraya wo navigation bhi hum rok skte hai 
    // 4 - target
    // 5 - toelement
    // 6 - srcElement - very imp.
    // 7 - current target 
    // 8 - interview related - client ki postion btane ke liye - clientX, clientY, offSet , screenX, screenY
    // 9 - interseting - altKey, ctrlKey, shiftKey, ( keyCode - research krke ke pdna pdega - a ka kya hai b ka kya hai or inhi ke basisc pe projects bna skte hai keyboard speed kiski kitni hai ya text diya or dekha user ne ki type shi se kiya ya nhi kiya - like typingmaster )- keyboard ki jitni bhi keys hai or kuch special keys bhi hai to in sb ko phchanne ke liye - so inka direct acess mil jata hai press hui ya nhi 



    // EventPropogation

    // document.getElementById('owl').onclick = function(){
    //      alert("owl clicked")
    // }, true)

    // first we will see this false things - what if we true this - but we see no difference to phir ye hai kya ??
    
    // so letssee there are 2 context of EventPropogation - 1. eventBubbling 2. eventCapturing

    // in market most time use is defaultset which is here false jisko hum bolte hai eventBubbling but in some scenerio we capture the eventCapturing too. - so for that case we seee the 2 example then we clearly understand this - like how EventPropogation happend and how we stop that EventPropogation


    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("Owl clicked");
    // }, false)

    // so here both code are same only the difference is we target diff. id's only but how the syntax work and which value print when it was intersting and impor. here

    // so here is a intersting thing when we click in our owl - so owl is also inside images id so ul one also activated becouse inside ul > li > images - so obiusly when we click inside owl so our top code - images also activated 

    // so here the intersting thing comes which activity click when phle kya print hoga ( owl or clicked inside the ul ) letsee

    // so here when we click on the owl image first ( owl clicked ) appear then ( clicked inside the ul ) text appear - so here the eventBubbling comes in the picture - so bumble. do what so it goes bottom to above - so we click on innerelement which is image > li > ul - so jo bhi element can track our script bade element ko inside to outside wo hota hai event propogation and usko bolte hai bubbling yha pe

    // but in actual it is not a good thing - ek or aata hai iska which is capturing mode 

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, true)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("Owl clicked");
    // }, true)

    // now if we click so first - ("clicked inside the ul") this test show then - ("Owl clicked") text becouse - capturing jata hai top se bottom - so here no one wrong it depends on our use case - 

    // now many time we don't want event bubbling ki bubbling pass hote jaye like upar jate rhe - becouse maybe hmne upar waale mai bhi koi script lgai ho capturing/track ki - so we won't inner element alg rh jaaye uska bubbling na ho and outer element alg rh jaaye - so whi pe ye e kaam aata hai 

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("Owl clicked");
    //     e.stopPropagation()   // - method - same as our preventDefault
    // }, false)


    // Prevent Default same as stopPropagation - very easy example

    // for now the default behaviour of this is we click on google and - this throws us on Google's website. - but we don't want this 

    // document.getElementById('google').addEventListener('click', function(e){
    //     e.preventDefault();
    //     console.log("Google clicked");
    //     // and if we dont want bubbling 
    //     e.stopPropagation();
    // }, false)


    // Now our basic almost cover so lets create an activites/project-style and acche se smjhte hai ise 


    // Now what we want is we click on the images and they all are wash out - dikhne mai aasana hai but problems bhaut hoti hai yha pe - kese hoti hai let's discuss

    // so to select all the images we picked up the ul id which is images 

    document.querySelector('#images').addEventListener('click', function (e) {
        // console.log(e);
        // so now we know the exact target kha se utha rha hai 
        // console.log(e.target);
        // we also take things after target tooo 
        // console.log(e.target.parentNode); // becouse many times hme target mil jata hai but we wan't there parent becouse in this
        // example we want remove images but - images already inside the li's so we also want all the li's remove which is in this case work as a parentNode of all image

        // so now if we want to remove this so how we remove it - so it's easy let'seee 

        // let removeIt = e.target.parentNode
        // removeIt.remove();  // - 1st approach

        // 2nd approach - both code almost same no diff. - this is slightly confusing
        // removeIt.parentNode.removeChild(removeIt);


        // let removeIt = e.target.parentNode
        // removeIt.remove();  // - 1st approach

        // but there is also one problem if we click in google place so all the image remove together - becouse we select image
        // then its ok but if we select in li - so li parent is ul - so li ka parent ul aaya and we say remove that ul so total 
        // li's remove - so for prevent this we see here - we apply some strict checks here 

        console.log(e.target.tagName); // - LI/IMG these are tag name - so on the basis of tags we apply if and else cond.

        if(e.target.tagName === 'IMG' )
        {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove();  // - 1st approach
        }


    },false)