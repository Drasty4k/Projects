const card = document.querySelectorAll(".card")
const imgModal = document.querySelector(".imgModal")
const img = document.querySelectorAll("img")
const modal = document.querySelector(".modal")
const leftButton = document.querySelector("#leftButton")
const rightButton = document.querySelector("#rightButton")
const closeButton = document.querySelector("#close")


leftButton.addEventListener("click", previousImage)
rightButton.addEventListener("click", nextImage)
closeButton.addEventListener("click", closeModal)
modal.addEventListener("click", window.onclick)

let imageList = []
let imageCounter = 0

img.forEach(image =>{
    imageList.push(image.src)
})

card.forEach(item => {
    item.addEventListener("click", e =>{
        let image = e.target.src
        imgModal.style.backgroundImage = `url(${image})`
        modal.style.display = "block"
        imageCounter = imageList.indexOf(image)
    })
})



window.onclick = event =>{
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function closeModal(){
    modal.style.display = "none"
}

function previousImage(){
    imageCounter--
    if(imageCounter <= -1){
        imageCounter = 11
    }
    imgModal.style.backgroundImage = `url(${imageList[imageCounter]})`
}

function nextImage(){
    imageCounter++
    if(imageCounter >= 12){
        imageCounter = 0
    }
    imgModal.style.backgroundImage = `url(${imageList[imageCounter]})`
}















