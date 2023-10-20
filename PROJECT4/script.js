
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiURL = "https://api.quotable.io/quotes/random?maxLength=80";
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML= data[0].content;
    author.innerHTML= data[0].author;
    console.log(data);
}
getQuote(apiURL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML +"--- by "+author.innerHTML, "Tweet Window","width=600, Height = 300");
}