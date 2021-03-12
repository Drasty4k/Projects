document.querySelector("#button").addEventListener("click", randomQuote)


function randomQuote(){
   let quotes = [
       {
        quote: `"Life is like a landscape.You live in the midst of it but can describe it only from the vantage point of distance."`,
        author: "Charles Lindbergh"
       },
       {
        quote: `"The price of anything is the amount of life you exchange for it."`,
        author: "David Thoreau"
       },
       {
        quote: `"Be yourself; everyone else is already taken."`,
        author: "Oscar Wilde"
       },
       {
        quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: "Albert Einstein"
       },
       {
        quote: `"A room without books is like a body without a soul."`,
        author: "Marcus Tullius Cicero"
       },
       {
        quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        author: "Dr. Seuss"
       },
       {
        quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
        author: "Robert Frost"
       },
       {
        quote: `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`,
        author: "J.K. Rowling"
       },
       {
        quote: `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."`,
        author: "C.S. Lewis"
       },
       {
        quote: `"A friend is someone who knows all about you and still loves you."`,
        author: "Elbert Hubbard"
       }
   ]

   let random = randomNumber(10)

    document.querySelector("blockquote").innerText = quotes[random].quote
    document.querySelector("p").innerText = quotes[random].author

}

function randomNumber(max){
    return Math.floor(Math.random() * Math.floor(max))
}