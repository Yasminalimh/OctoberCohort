// string concatenation
//string interpolation
// = vs == vs === / 1 == "1" || 1 === "1"
// && vs ||


// string concatenation vs string interpolation:

const firstName = "Yasmin"
const lastName = "Ali"
let age = 22
const dob = "23/03/2001"
var welcomeMessage = "Hello welcome to lesson 2"

console.log(welcomeMessage + " " + firstName + " give us an intro;" + " hello my name is " + firstName + " " + lastName + " I am " + age + " years old born on " + dob)

// vs

console.log(`${welcomeMessage} ${firstName} give us an intro; hello my name is ${firstName} ${lastName} I am ${age} years old born on ${dob}`)

