var $quoteBox = document.getElementById('quotebox');

var quotesList = [
  {
    quote: "Planting popcorn does not produce more popcorn",
    person: "Farmer Ted"
  }, {
    quote: "White whale, bad whale",
    person: "Confucious (Moby Dick)"
  }, {
    quote: "Use the strobe function to disorientate your attacker",
    person: "Flashlight"
  }, {
    quote: "Apply liberally to your erogenous zones",
    person: "Spice Bomb"
  }, {
    quote: "Help me, I'm bleaching",
    person: "The Great Barrier Reef"
  }
];

function randomQuote() {
  var randIdx = Math.floor(Math.random() * quotesList.length);
  var randQuote = quotesList[randIdx];
  $quoteBox.innerHTML = "\"" + randQuote.quote + "\" - " + randQuote.person;
}