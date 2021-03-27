const button = document.querySelector("#btn")
let result1 = document.querySelector("#result1")
let result2 = document.querySelector("#result2")
let result3 = document.querySelector("#result3")

button.addEventListener("click", calculate)

function calculate(){
    var billValue = Number(document.querySelector("#bill").value)
    let peopleValue = Number(document.querySelector("#sharing").value)
    let ratingValue = document.querySelector("select").value
    let loadingAnimation = document.querySelector(".lds-roller")

    if(billValue == ""){
        emptyResult("Bill value undefined")
    }else{
        result()
    }

    if(peopleValue == ""){
        emptyResult("Sharing value undefined")
    }else{
        result()
    }

    if(ratingValue === "choose"){
    emptyResult("Choose a rating value")
    }else{
        result()
    }

function emptyResult(message){
    alert(message)
    result1.innerText = ``
    result2.innerText = ``
    result3.innerText = `` 
}
    
function result(){
    loadingAnimation.style.display = "block"
    setTimeout(()=>{
        loadingAnimation.style.display = "none"
        let tipAmount = billValue * ratingValue
        let eachPersonOwes = (billValue / peopleValue) + (tipAmount / peopleValue)
        let totalAmount = billValue + tipAmount

        result1.innerText = `Tip amount: $${tipAmount}`
        result2.innerText = `Total Amount: $${totalAmount}`
        result3.innerText = `Each person owes: $${eachPersonOwes}`
    }, 4400)
}
}

