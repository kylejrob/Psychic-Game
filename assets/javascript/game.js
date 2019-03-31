var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 7;
var guessChoices = [];

document.onkeyup = function(event) {

    var yourGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(yourGuess) > -1) {

       if (yourGuess === computerGuess) {
           wins++;
           numGuesses = 7;
           guessChoices = [];
       }

       if (yourGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(yourGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 7;
       losses ++;
       guessChoices = [];

       
   }

   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Guesses you've chosen so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};
