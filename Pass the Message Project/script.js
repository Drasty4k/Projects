document.querySelector("#button").addEventListener("click", messageSent)

function messageSent(){
    let text = document.querySelector("#text").value
    let sent = document.querySelector("#output")

    sent.innerText = text
}