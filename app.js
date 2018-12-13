/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(),
    guessesLeft = 3;

// UI Elements
const UI_game = document.querySelector('#game'),
      UI_minNum = document.querySelector('.min-num'),
      UI_maxNum = document.querySelector('.max-num'),
      UI_guessBtn = document.querySelector('#guess-btn'),
      UI_guessInput = document.querySelector('#guess-input'),
      UI_message = document.querySelector('.message');

// Color values
const color_win = 'green',
      color_lose = 'red',
      color_continue = 'darkorange';

// Assign UI min and max
UI_minNum.textContent = min;
UI_maxNum.textContent = max;

// Play again event listener
UI_game.addEventListener('mousedown', function(e){
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guess
UI_guessBtn.addEventListener('click', function(){
  let guess = parseInt(UI_guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  }

  // Check if user won
  if (guess === winningNum) {
    // Game over - won
    guessOutcome(`${winningNum} is correct, YOU WIN!`, color_win);
  } else {
    // Wrong number
    guessesLeft -=1;

    if (guessesLeft === 0){
      // Game over - lost
      guessOutcome(`Game over, you lost. The correct number was ${winningNum}.`, color_lose);
    } else {
      // Game continues - answer wrong
      guessOutcome(`${guess} is not correct, ${guessesLeft} guesses left.`, color_continue);
    }
  }
});

// Guess outcome
function guessOutcome(msg, color){
  // If statement to determine whether the game is over
  if (color === color_continue) {
    // Clear Input
    UI_guessInput.value = '';
  } else {
    // Disable input
    UI_guessInput.disabled = true;
     // Play Again?
    UI_guessBtn.value = 'Play Again';
    UI_guessBtn.className += 'play-again'; // Append to class so it doesn't ruin anything
  }
  // Change border color
  UI_guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);
}

// Get winning number
function getWinningNum(){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color){
  UI_message.style.color = color;
  UI_message.textContent = msg;
}