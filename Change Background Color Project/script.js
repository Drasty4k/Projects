document.querySelector("#button").addEventListener("click", colorChange)


function colorChange(){
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)

    document.querySelector("body").style.backgroundColor = `rgb(${red},${green},${blue})`
    document.querySelector("#button").style.backgroundColor = `rgb(${red},${green},${blue})`
}


function randomNumber(max){
   return Math.floor(Math.random() * Math.floor(max))
}