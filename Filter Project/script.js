const buttons = document.querySelectorAll("input[type=button]")
const sections = document.querySelectorAll(".card")


// Make the buttons to filter
buttons.forEach(item =>{
    // make one button active
    item.addEventListener("click", ()=>{
        buttons.forEach(item =>{
            item.className = ""
        })
        item.className = "active"
        // Show Images
        let values = item.getAttribute("value")
        sections.forEach(show =>{
            show.style.display = "none"
            if(show.getAttribute("data-item") === values || values === "all"){
                show.style.display = "block"
            }
        })
    })
})


let input = document.querySelector(".search")

// Make the search input to filter
input.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase()
    const cards = document.querySelectorAll(".card")

    cards.forEach(function(cards){
        const text = cards.textContent

        if(text.toLowerCase().indexOf(term) != -1){
            cards.style.display = "block"
        }else{
            cards.style.display = "none"
        }
    })

}) 







