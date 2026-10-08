let button = document.getElementById("btn")
let num = document.getElementById("num")

let metertofeet = document.getElementById("m/f")
let literstogallons = document.getElementById("l/g")
let kilostopounds = document.getElementById("kg/p")

metertofeet.textContent = "1 meter = 3.281 feets | 1 feet = 0.305 meter"
literstogallons.textContent = "1 liter = 0.264 gallon | 1 gallon = 3.785 liters"
kilostopounds.textContent = "1 kilogram = 2.204 pounds | 1 pound = 0.454 kilograms"

button.addEventListener("click" , function convert(){
    let feet = num.value * 3.281
    let meters = num.value * 0.305
    metertofeet.textContent = `${num.value} meters = ${feet.toFixed(3)} feet | ${num.value} feet = ${meters.toFixed(3)} meters`

    let gallons = num.value * 0.264
    let liters = num.value * 3.785
    literstogallons.textContent = `${num.value} liters = ${gallons.toFixed(3)} gallons | ${num.value} gallons = ${liters.toFixed(3)} liters`

    let pounds = num.value * 2.204
    let kilograms = num.value * 0.454
    kilostopounds.textContent = `${num.value} kilos = ${pounds.toFixed(3)} pounds | ${num.value} pounds = ${kilograms.toFixed(3)} kilograms`

})




