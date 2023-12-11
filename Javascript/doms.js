//Changes to occcur on our html side from our js

//Document = HTML

//document.body or document.head => the two main references

//Instead of referecing document.body all the time => short hand to label it with a variable. See example:

/*
const body = document.body
const head = document.head

console.log(body)
*/


//How to create an element through js:

/*
const body = document.body
const head = document.head

const pageTitle = document.createElement('title')

console.log(pageTitle)

pageTitle.innerText = "Lesson 1 Doms"
console.log(pageTitle)
*/

// In order for it to appare on the html:

/*
const body = document.body
const head = document.head

const pageTitle = document.createElement('title')

console.log(pageTitle)

pageTitle.innerText = "Lesson 1 Doms"

head.append(pageTitle)
*/

//Ex:

/*
const body = document.body
const head = document.head

const pageTitle = document.createElement('title')

console.log(pageTitle)

pageTitle.innerText = "Lesson 1 Doms"

head.append(pageTitle)

const smallParagraph = document.createElement('p')

smallParagraph.innerText = "Hi My name is Yasmin fvjkfsndfisubfbvisfvhjsdbfhb gjhdsihfksdjfeio ciusdn fiefh  fsrghshgshdgsfg "

body.append(smallParagraph)

*/

//How to make changes to an element already in html 
// First Scenario: getElementById

/*
const heading = document.getElementById('headingOne')
heading.innerText = "Yasmin"
*/

//Second scenario: queriy selecter

/*
const headingOne = document.querySelector('h1')
headingOne.innerText = "Yasmin"
*/

//Create a ordered list of 3 items and add this list onto the page
//for it to be displayed

/*
const body = document.body

const orderedList = document.createElement("ol")
const item1 = document.createElement("li")
item1.innerText = "bread"

const item2 = document.createElement("li")
item2.innerText = "milk"

const item3 = document.createElement("li")
item3.innerText = "cheese"

orderedList.append(item1)
orderedList.append(item2)
orderedList.append(item3)

body.append(orderedList)
*/

//Alert:

/*
alert("Hello this is an alert")
*/

//Prompt:

/*
prompt("Hello, what is your name?")
*/

//Prompt ex:

const headingOne = document.querySelector('h1')
headingOne.innerText = "Yasmin"

var response = prompt("Hi, What is your name?")

console.log(response)
headingOne.innerText = response


