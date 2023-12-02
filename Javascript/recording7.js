//Fizzbuzz


/*
var num = 15

if((num%3 === 0) && (num%5===0)){
    console.log("FIZZBUZZ!")
}else if(num%3===0){
    console.log("fizz")
}else if(num%5===0){
    console.log("buzz")
}else{
    console.log(num)
}
*/

/*
for(let num=1; num<=100; num++){
    if((num%3 === 0) && (num%5===0)){
        console.log("FIZZBUZZ!")
    }else if(num%3===0){
        console.log("fizz")
    }else if(num%5===0){
        console.log("buzz")
    }else{
        console.log(num)
    }
}
*/

// other ways to use for loops for

//Ex:

/*
var array = [1,2,3,4,5,6345,32]
target = 5

for (let i=0; i<array.length; i++){
    if(array[i] === target){
        console.log("target is in the array at position " + i)
    }
}

console.log(array[4])

*/

// while loops

//Ex:

/*
let i=0
while (i<100){
    console.log(i)
    i++
}
*/

//Objects

/*
var person1 = "john"
var person2 = "jane"

age1 = 45
age2 = 56
*/

/*
const person1 = {
    name: "john" ,
    age: 45
}

const person2 = {
    name: "jane" ,
    age: 56
}

console.log(person1)

//can modify

person2.age = 25
console.log(person2)
*/

// object construction

/*
function Car(name, model, type, colour, engineSize, drive){
    this.name = name
    this.model = model
    this.type = type
    this.colour = colour
    this.engineSize = engineSize
    this.drive = drive
}

let audi = new Car("Audi","Q3", "Sline", "Grey", 2.0, "4 wheel drive")

console.log(audi)

let bmw = new Car("BMW","150", "MSPORT", "Grey", 2.0, "front wheel drive")

console.log(bmw)
*/


// Putting them in array

/*
function Car(name, model, type, colour, engineSize, drive){
    this.name = name
    this.model = model
    this.type = type
    this.colour = colour
    this.engineSize = engineSize
    this.drive = drive
}

let audi = new Car("Audi","Q3", "Sline", "Grey", 2.0, "4 wheel drive")
let bmw = new Car("BMW","150", "MSPORT", "Grey", 2.0, "front wheel drive")

var array = [audi,bmw]

console.log(array)
*/

//Ex: how it can hold functions

function Car(name, model, type, colour, engineSize, drive){
    this.name = name
    this.model = model
    this.type = type
    this.colour = colour
    this.engineSize = engineSize
    this.drive = drive
    this.sales = function(){
        return this.name + " " + this.model + " FOR ONLY £15,000"
    }
}

let audi = new Car("Audi","Q3", "Sline", "Grey", 2.0, "4 wheel drive")
let bmw = new Car("BMW","150", "MSPORT", "Grey", 2.0, "front wheel drive")

console.log(bmw.sales())