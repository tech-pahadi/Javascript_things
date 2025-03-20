const requesrUrl = "https://api.github.com/users/tech-pahadi";

const xhr = new XMLHttpRequest();

// so XMLHttpRequest is method on itself

// so this opened send the request in actual 

xhr.open('GET', requesrUrl);

// so actually when we send this request so it's changed all the code changed (state code changed) and to see this we do 

// console.log(xhr.readyState)

// so actually ready state changes each and every time we can track this becouse we can't track it contiously so when the state is 0 to 1 so we print console and then nothing so it's only print 1 so for continously track we do 

// xhr.onreadystatechange

// so here by this we change the state of xhr 
// so when we learn firebase/subscriber model / appwrite all these when we work on it so we see the statechange there so it take function only 

xhr.onreadystatechange = function()
{
    console.log(xhr.readyState)
    // so to detect state we do 
    if (xhr.readyState === 4)
    {
        // console.log(this.responseText);  
        // so what is this reponsetext we can't define any variable like this so what is this actually 
        // so actually pta krne ke liye ki is particular object ke upar is particular function ke andar he chaiye 
        // so we do 
        // console.log(this.responseText) // we talk about this context we see this later context thing
        // so because of this is an object we can easily see the other things too 

        // const data = this.responseText // so we hold all the data inside data
        // console.log(data) 
        // console.log(typeof data)  // string
        // console.log(data.followers) // but when we run this so we see the undefined not follower so becouse of the type this will not work the type is string so to convert it into object we do 
        // most of the time when response comes from url it is an string type most of the time.

        const data = JSON.parse(this.responseText); // parse convert string into json
        console.log(typeof data);
        const photo = data.avatar_url
        const follower = data.followers;
        const location = data.location

        const cardImg = document.querySelector('.card-img')
        const followersCount = document.querySelector('.followers')
        const myLocation = document.querySelector('.location')

        cardImg.src = photo;
        followersCount.innerHTML = `Follower : ${follower}`;
        myLocation.innerHTML = `Follower : ${location}`;


        // now we talking about this console  - the console.log or itself the console if we see in the js recommendation/guidelines/strandization it will not be there , so is console is a js part - techincally it is or itsn't console and many api's not. part of js speacially the document the document.getelemeentbyid all these are not core js part 

        // core js basic part = artmetic / loops / function etc etc. only 

        //  console.log = actually a browser debugger tool  (dev tool) 
        // so it actually not be there js inject it in runtime 

        // js actually run by c++

    }
}



console.log("Here")

// 2 parameters are there 1st one is method & 2nd one is string  

// so for now the request is not send because we first call the open so who call open ??

// actaully open is not call on itself  

xhr.send()  // now it has been called 




