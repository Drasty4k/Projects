document.querySelector("#button").addEventListener("click", colorChange)


function colorChange(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16) 

    document.querySelector("body").style.backgroundColor = "#" + randomColor
    document.querySelector("h1").innerText = "HEX COLOR: #" + randomColor
}
