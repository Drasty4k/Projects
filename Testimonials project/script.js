document.querySelector("#leftButton").addEventListener("click", previousQuote)
document.querySelector("#rightButton").addEventListener("click", nextQuote)

const img = document.querySelector("#img")
const name = document.querySelector("#name")
const rating = document.querySelector("#rating")
const text = document.querySelector("#text1")
const text1 = document.querySelector("#text1").textContent
const text2 = document.querySelector("#text2").textContent
const text3 = document.querySelector("#text3").textContent
const text4 = document.querySelector("#text4").textContent
const text5 = document.querySelector("#text5").textContent

let counter = 0

const photos = ["picture1", "picture2", "picture3", "picture4", "picture5"]
const names = ["Alice", "Chriss", "Denisa", "Mike", "Alex"]
const ratings = ["&#9733; &#9733; &#9733; &#9733; &#9733;",
                 "&#9733; &#9733; &#9733; &#9733; &#9734;",
                 "&#9733; &#9733; &#9733; &#9734; &#9734;",
                 "&#9733; &#9733; &#9733; &#9733; &#9734;",
                 "&#9733; &#9733; &#9734; &#9734; &#9734;"]
const texts = [text1, text2, text3, text4, text5]

function nextQuote(){
    counter++
    if(counter > 4){
        counter = 0
    }
    text.innerHTML = `${texts[counter]}`
    rating.innerHTML = `${ratings[counter]}`
    name.innerText = `${names[counter]}`
    img.style.backgroundImage = `url(${photos[counter]}.jpg)`
}

function previousQuote(){
    counter--
    if(counter <= -1){
        counter = 4
    }
    text.innerHTML = `${texts[counter]}`
    rating.innerHTML = `${ratings[counter]}`
    name.innerText = `${names[counter]}`
    img.style.backgroundImage = `url(${photos[counter]}.jpg)`
}