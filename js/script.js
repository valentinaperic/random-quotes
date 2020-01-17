/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//quote will automatically change after 5 seconds
window.onload = function(){
  setInterval(function(){
    printQuote();
  }, 10000);
};
  
/*** 
 * `quotes` array 
***/

//properties list: quote, source, citation, and year
let quotes = [
  {
    quote: "Well, I’ve made up my mind, anyway. I want to see mountains again, Gandalf – mountains; and then find somewhere where I can rest.",
    source: "J.R.R. Tolkien, The Lord of the Rings",
    citation: "book",
    year: 1948
  },  
  {
    quote: "You can never be overdressed or overeducated.",
    source: "Oscar Wilde",
  },
  {
    quote: "Time you enjoy wasting is not wasted time.",
    source: "Marthe Troly-Curtin",
    year: 1911
  },  
  {
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    citation: "book",
  },
  {
    quote: "She decided long ago that life was a long journey. She would be strong, and she would be weak, and both would be okay.",
    source: "Tahereh Mafi",
    citation: "book",
    year: 2016
  },  
];

 
/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  //random quote from quotes array is returned
  return quotes[Math.floor(Math.random() * quotes.length)];
}


/***
 * `getRandomColor` function
***/

function getRandomColor() {

  let colors = ["blue", "red", "purple", "rgb(58, 193, 98)", "black"];

  return colors[Math.floor(Math.random() * colors.length)];
}


/***
 * `printQuote` function
***/

function printQuote() {

  let quote = getRandomQuote();
 
  let finalQuote = '<p class="quote">' + quote.quote + '</p>' 
    + (quote.source ?  '<p class="source">' + quote.source : "" )
    + (quote.citation ?  '<span class="citation">' + quote.citation : "" )
    + (quote.year ?  '<span class="citation">' + quote.year : "" )
    + '</p>'

  //change background color of page
  document.body.style.backgroundColor = getRandomColor();

  //final quote string is attached to quote-box element
  return document.getElementById('quote-box').innerHTML = finalQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);