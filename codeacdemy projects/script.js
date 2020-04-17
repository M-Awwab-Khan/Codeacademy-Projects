let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget () {
  let secret = Math.floor(Math.random() * 10);
  return secret;
};

function getAbsoluteDistance (x, y) {
  let absolute = Math.abs(x - y);
  return absolute;
}; 

function compareGuesses (humanGuess, computerGuess, targetNumber) {
   if (humanGuess > 9 || humanGuess < 0) {
     alert("Your number is out of range please type number between 0 and 9");
   };
   let humanDiff = getAbsoluteDistance (humanGuess, targetNumber)
   let computerDiff = getAbsoluteDistance(computerGuess, targetNumber);
   if (humanDiff <= computerDiff) {
     return true;
   } else if (humanDiff > computerDiff) {
     return false;
   };
};

function updateScore (winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  };
};

function advanceRound () {
  currentRoundNumber++;
};