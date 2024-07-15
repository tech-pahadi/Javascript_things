// Switch

// so there is a case were we use too much if-else-elseif things - 


// so now here if we use this for 12th month so we use too many else-if right

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;    
    
    default:
        console.log("Default case match");
        break;
}



// so here break have a amazing concept - by defualt wherever our key match so from there to end our code execute fully expect default

// so break - simply break the control flow


// for strings


const months = "Feb"

switch (months) {
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;    
    
    default:
        console.log("Default case match");
        break;
}



