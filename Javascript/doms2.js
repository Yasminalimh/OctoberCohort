const head = document.head
const body = document.body

//How to do an event listener; function

/*
var heading2 = document.querySelector('h2')

heading2.addEventListener('click', function(){
    body.style.backgroundColor = "green"
    heading2.style.color = "orange"
})
*/

// how to do an event listener; changeTheme

/*
var heading1 = document.querySelector('h1')
var heading2 = document.querySelector('h2')

function changeTheme(){
     body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading1.addEventListener('click', changeTheme)
heading2.addEventListener('click', changeTheme)
*/

//Understand different events; mouse event

/*
var heading1 = document.querySelector('h1')
var heading2 = document.querySelector('h2')

function changeTheme(){
     body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading1.addEventListener('click', changeTheme)
heading2.addEventListener('mouseenter', changeTheme)
*/

// Ex How to use append = creating a brand new element 

/*
var heading1 = document.querySelector('h1')
var heading2 = document.querySelector('h2')

function changeTheme(){
     body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading1.addEventListener('click', function(){
    var name = prompt("what is your name? ")

    var nameEl = document.createElement('h1')
    nameEl.innerText = name

    body.append(nameEl)
})


heading2.addEventListener('click', changeTheme)
*/

// changes as adding color pink 

/*
var heading1 = document.querySelector('h1')
var heading2 = document.querySelector('h2')

function changeTheme(){
     body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading1.addEventListener('click', function(){
    var name = prompt("what is your name? ")

    var nameEl = document.createElement('h1')
    nameEl.innerText = name
    nameEl.style.color = 'pink'

    body.append(nameEl)
})


heading2.addEventListener('click', changeTheme)
*/

//how to use it with cinditional statements

/*
var heading1 = document.querySelector('h1')
var heading2 = document.querySelector('h2')

function changeTheme(){
     body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading1.addEventListener('click', function(){

    var name = prompt("what is your name? ")

    if(name.length>0){

        changeTheme()
        
        console.log(name)

        var nameEl = document.createElement('h1')
        nameEl.innerText = name
        nameEl.style.color = 'pink'

        body.append(nameEl)
    }

})


heading2.addEventListener('click', changeTheme)
*/

var heading1 = document.querySelector('h1')
var heading2 = document.querySelector('h2')

function changeTheme(){
     body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading1.addEventListener('click', function(){

    var name = prompt("what is your name? ")

    if(name.length>0){

        changeTheme()
        
        console.log(name)

        var nameEl = document.createElement('h1')
        nameEl.innerText = name
        nameEl.style.color = 'pink'

        body.append(nameEl)
    }

})


heading2.addEventListener('click', changeTheme)

const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    var name = document.getElementById('name')
    var imgUrl = document.getElementById('img')

    var h1El = document.createElement('h1')
    var imgEl = document.createElement('img')

    h1El.innerText = name.value
    imgEl.src = imgUrl.value

    var div = document.querySelector('div')

    div.append(h1El)
    div.append(imgEl)

    div.classList.remove('dontDsiplay')
})

var themeBtn = document.getElementById('darkMode')

themeBtn.addEventListener('click', function(){
    
    body.classList.toggle('darkMode')

})

