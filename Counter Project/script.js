document.querySelector("#lowerCount").addEventListener("click", minus)
document.querySelector("#addCount").addEventListener("click", plus)

let counter = 0
let counterDisplay = document.querySelector("#counter-display")

function minus(){
    counter--
    counterDisplay.innerHTML = counter
    color = counter < 0 ? counterDisplay.style.color = "red" : counterDisplay.style.color = "black"
}

function plus(){
    counter++
    counterDisplay.innerHTML = counter
    color = counter > 0 ? counterDisplay.style.color = "green" : counterDisplay.style.color = "black"
}



