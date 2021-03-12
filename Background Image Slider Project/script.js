document.querySelector("#rightButton").addEventListener("click", nextImage)
document.querySelector("#leftButton").addEventListener("click", previousImage)

let counter = 0

let photos = ["picture1", "picture2", "picture3", "picture4", "picture5"]

function nextImage(){
    counter++
    if(counter >= 4){
        counter = 0
    }
    img.style.backgroundImage = `url('${photos[counter]}.jpg')`
}

function previousImage(){
   counter--
   if(counter <= -1){
    counter = 4
    }
   img.style.backgroundImage = `url('${photos[counter]}.jpg')`
}

