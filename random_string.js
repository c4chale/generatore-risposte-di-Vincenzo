var $quoteBox = document.getElementById('quotebox');

var quotesList = [
    "Pazzesco!",
    "Top!",
    "A pressione!",
    "Fa troppo ride",
    "Tutto sotto controllo",
    "Bomba",
    "Spettacolo",
];

function randomQuote() {
  var randIdx = Math.floor(Math.random() * quotesList.length);
  var randQuote = quotesList[randIdx];
  $quoteBox.innerHTML = randQuote;
}