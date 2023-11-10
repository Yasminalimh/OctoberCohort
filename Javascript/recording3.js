// Ex: Showing how <, >, <=,>= can be used

//if(age === 60){
    /*console.log("Only 7 years to go")
    console.log("need to still work")
 /*} else if(age >= 67){
    console.log("Time to retire")
}else{
    console.log("need to work")
}
*/

//Ex: Showing hoe you can put in other logical operators together

/* var age = 70

if(age === 60){
    console.log("Only 7 years to go")
    console.log("need to still work")
}else if((age>=67) && (age<70)){
    console.log("Time to retire")
}else if(age>=70){
    console.log("Enjoying my time off")
}
else{
    console.log("need to work")
} */


// Ex: Nested conditional statemenent

/*var age =  "12"

if(typeof age === "number"){
    if(age === 60){
        console.log("Only 7 years to go")
        console.log("need to still work")
    }else if((age>=67) && (age<70)){
        console.log("Time to retire")
    }else if(age>=70){
        console.log("Enjoying my time off")
    }
    else{
        console.log("need to work")
    }
}else{
    console.log("Error: Age must be a number")
}
*/

//Ex: Logical check

/* var name = "welcome back message"
console.log(name.length)

if(typeof name === "string" && (name.length<15)){
    if(name === "john"){
        console.log("Welcome back John")
    }else {
        console.log("Sorry I do not recongise you")
    }
}else{
    console.log("Error")
}
*/

// Ex: .toLowerCase()

/* var name = "John"
console.log(name.toLowerCase())

if(typeof name === "string" && (name.length<15)){
    if(name.toLowerCase() === "john"){
        console.log("Welcome back John")
    }else {
        console.log("Sorry I do not recongise you")
    }
}else{
    console.log("Error")
}
*/

// Switch cases

/*

Switch(condition){
    case 1:
        doThis
        break
    case 2:
        doThis
        break
    default:
        doThis
        break;        
}

*/

 // Ex: switch cases


/* var dayOfTheWeek = "Tuesday"

switch(dayOfTheWeek.toLowerCase()){
    case "monday":
        console.log("Work + footboll")
        break;
    case "tuesday":
        console.log("Work")
        break;
    case "wednesday":
        console.log("Work")
        break;
    case "thursday":
        console.log("Work")
        break;
    case "friday": 
    console.log("YAY ITS FRIDAY")
        break;
    case "saturday":
        console.log("Its a weekend")
        break;
    case "sunday":
        console.log("its monday tomorrow :(")
        break;
    default:
        console.log(`Error ${dayOfTheWeek} is not an actual day`)
        break;
}
*/

// Ex: switch cases with if

var dayOfTheWeek = "monday"
var time = "16:30"


switch(dayOfTheWeek.toLowerCase()){
    case "monday":
        if(time === "16:30"){
            console.log("finished work early")
        }
        break;
    case "tuesday":
        console.log("Work")
        break;
    case "wednesday":
        console.log("Work")
        break;
    case "thursday":
        console.log("Work")
        break;
    case "friday": 
    console.log("YAY ITS FRIDAY")
        break;
    case "saturday":
        console.log("Its a weekend")
        break;
    case "sunday":
        console.log("its monday tomorrow :(")
        break;
    default:
        console.log(`Error ${dayOfTheWeek} is not an actual day`)
        break;
}


