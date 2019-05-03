


// variables to hold the number of wins, losses, and guesses left, and guesses so far. 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
//array for all possible choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guess input
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //random computer guess
    guessesSoFar.push(userGuess); //adding user guess to guessesSoFar
    
    
    if (userGuess === computerGuess) {
        wins++;
        alert('You Won!');
        guessesLeft = 9; //reset guesses so user can play again
        guessesSoFar.length = 0; //removes everything from guesses so far to begin again
    }
   
    else if (guessesLeft === 0){
        losses++;
        alert('You lost. Try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    
    
    else if (userGuess !== computerGuess){
        guessesLeft-- ; //Reducing number of guesses left after each input
    }  
    

      // Display in HTML    
      var html = "<p>Total Wins: " + 
      wins + 
      "</p>" +
      "<p>Total Losses: " + 
      losses + 
      "</p>" +
      "<p>Guesses Left: " + 
      guessesLeft + 
      "</p>" +
      "<p>Your Guesses so far: " +
      guessesSoFar +
      "</p>"
      ;
     

      document.querySelector('.container-input').innerHTML = html;
  }

