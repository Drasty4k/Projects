const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".btn")
const remove = document.querySelector(".remove")
const equal = document.querySelector(".equal")


buttons.forEach(button => button.addEventListener("click", (e)=>{
    let value = e.target.innerText
        screen.innerText += value
}))

equal.addEventListener("click", calculate)

remove.addEventListener("click", erase)

function calculate(){
   let answer = eval(screen.innerText)

   if(screen.innerText === ""){
    screen.innerText = "Please put a value"
   } else{
   screen.innerText = answer
   }
}

function erase(){
    screen.innerText = ""
}













