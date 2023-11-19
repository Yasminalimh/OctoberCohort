//Array

//How to write array 

/*
var array = ["hajdvasvdfj", 1,2,2]
console.log(typeof array)
console.log(array)
console.log(array.length)
*/

// Ex: Treat it like a list

/* 
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(typeof shoppinglist)
console.log(shoppinglist.length)
*/

// *Methods

// -> .push()

// *Properties

// -> .length vs index positioning

// --> length

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist.length)
*/

// --> Index postitioning

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist[3])
*/

// how to change an item in the list

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist[3])

shoppinglist[0] = "apple"

console.log(shoppinglist)
*/

// How to add items to the list - .push()

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist[3])

shoppinglist.push("oranges")
shoppinglist.push("apples")
shoppinglist.push("green apples")

console.log(shoppinglist)
*/

// how to remove an item in the list - .pop()

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist[3])

shoppinglist.push("oranges")
shoppinglist.push("apples")
shoppinglist.push("green apples")
shoppinglist.pop()

console.log(shoppinglist)
*/

//how to add an item to the beginning of the list - .unshift()

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist[3])

shoppinglist.push("oranges")
shoppinglist.push("apples")
shoppinglist.push("green apples")
console.log(shoppinglist)

shoppinglist.unshift("cheese")
console.log(shoppinglist)
*/

//how to remove an item from the beggining of the list - .shift()

/*
var shoppinglist = ["bread", "juice", "milk", "cereal"]
console.log(shoppinglist[3])

shoppinglist.push("oranges")
shoppinglist.push("apples")
shoppinglist.push("green apples")
console.log(shoppinglist)

shoppinglist.shift()
shoppinglist.shift()
console.log(shoppinglist)
*/

// how to show the position of the item and if it is in the list - .indexof() - .includes()


/*
var shoppinglist = ["bread", "juice", "milk", "cereal,"]
console.log(shoppinglist[3])

shoppinglist.push("oranges")
shoppinglist.push("apples")
shoppinglist.push("green apples")
console.log(shoppinglist)

shoppinglist.shift()
shoppinglist.shift()
console.log(shoppinglist)

console.log(shoppinglist.indexOf("milk"))
console.log(shoppinglist.includes("milk"))
*/


// conditional statement with .indexof() and .includes()

var shoppinglist = ["bread", "juice", "milk", "cereal,", 1]
console.log(shoppinglist[3])

shoppinglist.push("oranges")
shoppinglist.push("apples")
shoppinglist.push("green apples")
console.log(shoppinglist)

shoppinglist.shift()
shoppinglist.shift()
console.log(shoppinglist)

if(shoppinglist.includes(1)){
    console.log(shoppinglist.indexOf(1))
}else{
    shoppinglist.push("green apples")
}







