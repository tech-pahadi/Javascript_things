
// <!-- Here comes the part 2 tutorial  -->

// <!-- to acess the id by using dom we simply write  -->
document.getelementbyid('xyz')

// <!-- to acess the name of the id by using dom we simply write  -->
document.getelementbyid('xyz').id

// <!-- to acess the name of the id by using dom we simply write   -->
document.getelementbyid('xyz').className

// <!-- this method is wrong to acess the class name  -->
document.getelementbyid('xyz').class

// <!-- behind the scene in elements and all we write also class but behind the scene the way document understand these is - classname  -->

// <!-- thats why when we wrtie javscript in html inside react which we call as jsx so we also write there classname -->
// <!-- 1st one - conflict with the classname -->
// <!-- 2nd one - when we create structure inside dom so we write it as a classname -->

// <!-- we also get all the attributes from here by using -- document.getElementById('title').getAttribute('key') -->
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

// <!-- we also set the attribute like we get  -->
document.getElementById('title').setAttribute('key', 'value')
document.getElementById('title').setAttribute('class', 'negi')
// <!-- it always overwrite  -->

// <!-- and if we want multiple class set so we do like this : -->
document.getElementById('title').setAttribute('class', 'negi heading')





