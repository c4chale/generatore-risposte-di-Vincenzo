// var textArray = [
//     'Sentence 1',
//     'Sentence 2',
//     'Sentence 3 - fra gay',
// ];
// var randomNumber = Math.floor(Math.random()*textArray.length);

// console.log(textArray[randomNumber])

var $quoteBox = document.getElementById('quotebox');

var quotesList = [
    "Pazzesco!",
    "Top!",
    "A pressione!",
    "Fa troppo ride",
    "Tutto sotto controllo"
];

function randomQuote() {
  var randIdx = Math.floor(Math.random() * quotesList.length);
  var randQuote = quotesList[randIdx];
  $quoteBox.innerHTML = randQuote;
}