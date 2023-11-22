//Functions

//How a function looks like:

//myName = global variable

/*const myName = "Yasmin"


// myName under function = private variable

function errorMessage(){
    const myName = "Amina"
    console.log(myName)
    console.log("This is an error message")
}

console.log(myName)

errorMessage()
*/

//What does a function solve?

/* 
const myName = "Yasmin"

function Name(){
    console.log("Amina")
}

Name()
*/

//Return statement 

/*
const myName = "Yasmin"

function errorMessage(){
    var someOne = "Amina"
    return someOne
}

console.log(errorMessage())
*/

// Ex:

/* 
let myName = "Yasmin"

function errorMessage(){
    var someOne = "Amina"
    return someOne
}

console.log("This is the initial " + myName)

myName = errorMessage()

console.log("This is after it had been reassigned " + myName)

// myName = errorMessage() => someOne = "Amina" => return someOne to be accessible to the rest of the code outside the private function
// myName = "Amina"

*/


//functions parameter & argument 

/* 
function addition(num1,num2,randomNumber){
    console.log(num1+num2)
    console.log(randomNumber)
}

addition(2,3,150.5)
*/

//Ex:


/*
function errorMessage(errorType){
    console.log("Error " + errorType)
}


var operation = "addition"
var num1 = 25
var num2 = 39 

function addition(a,b){
    console.log(a+b)
}

if (operation === "addition"){
    addition(num1,num2)
}else{
    errorMessage("sorry do not recognise that operation")
}
*/

//Ex:

function errorMessage(){
    var someOne = "Amina"
    return someOne
}

var firstName = "string"

function checkName(param){
    let ans = false
    if(typeof param === "string"){
        ans = true
    }

    return ans 
}

if(checkName(firstName) && (firstName.length>=2 && firstName.length<15)){
    if(firstName.toLowerCase() === "john" || firstName.toLowerCase() === "james" || firstName.toLowerCase() === "jason"){
        console.log(`Welcome back ${firstName}`)
    }else{
        console.log("Sorry computer does not recognise you")
    }
}else{
    errorMessage()
}


