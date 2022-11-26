// function something(){
//     alert("Hello World")
// }

// console.log("something")

// alert("Hello There")

const y = 12

let x = 12 

var z = 12 

x /= 6

z *= 2 



console.log(y<x<z)

const supers = ['Green Hornet', 'Spider-Man', 1, 3]

supers.push('Deadpool')

console.log(supers, supers.length)


var a = "5"

var b = 5

console.log(b - a)


const shooters = ['CoD', 'Battlefield', 'CsGo']

const allShooters = shooters.push('Valorant', 'Rainbow Six')

console.log(shooters, shooters.length)

// const shooters = ['Cod', 'Battlefield', 'CsGo']

// const allShooters = ['Valorant', 'Rainbow Six']

// shooters.push(...allShooters)

console.log(shooters);

const superheros = ['spider man', 'superman']

const allsupers = superheros.push('deadpool', 'batman')

console.log(superheros)

let num1 = 15 

let num2 = 15

num1 += 5 

num2 += 5

console.log(num1, num2)

const tvShows= ['Breaking Bad', 'Better Call Saul']

const addTvShows = tvShows.push('walking dead')

const otherShows = ('House MD' , 'Lost', 'X-Files')

tvShows.push(addTvShows)

console.log(tvShows, tvShows.length)


const price = 100

const age = 15

const balance = 250

if (age >= 18 && balance >=price){
    console.log('success')
} else {
    console.log('fail')
}

const infected = 150 

const vaccinated = 70

const immune = 39 

if (infected >= 100 && vaccinated <= 50 && immune <= 100) {
    console.log('We are fucked')
} else {
    console.log('Shits going ok')
}

function mouseOver(){
    document.getElementById("btn").style.backgroundColor = 'brown'
}

function mouseOut(){
    document.getElementById("btn").style.backgroundColor = 'rgb(254, 67, 67)'
}    

// mouse in bugs mouse down 

function mouseDown(){
    document.getElementById("btn").style.color = 'yellow';
    document.getElementById("btn").style.backgroundColor = 'cyan';
    
}



function mouseUp() {
    document.getElementById('btn').style.color = 'black'
    document.getElementById('btn').style.backgroundColor = 'rgb(254, 67, 67)'
    // alert("Hello")
}


function myFunction(){
    alert("Hello")
}




