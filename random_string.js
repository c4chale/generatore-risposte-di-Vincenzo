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
  $quoteBox.setAttribute("disabled","disabled");
  $quoteBox.style.display = 'block';
  var randIdx = Math.floor(Math.random() * quotesList.length);
  var randQuote = quotesList[randIdx];
  $quoteBox.innerHTML = randQuote;
  setTimeout(function() {
    $quoteBox.removeAttribute("disabled");
    $quoteBox.innerHTML = '';
    $quoteBox.style.display = 'none';
  }, 1000);
}
