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
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UI_game = document.querySelector('#game'),
      UI_minNum = document.querySelector('.min-num'),
      UI_maxNum = document.querySelector('.max-num'),
      UI_guessBtn = document.querySelector('#guess-btn'),
      UI_guessInput = document.querySelector('#guess-input'),
      UI_message = document.querySelector('.message');

// Assign UI min and max
UI_minNum.textContent = min;
UI_maxNum.textContent = max;

// Listen for guess
UI_guessBtn.addEventListener('click', function(){
  let guess = parseInt(UI_guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  }

  // Check if user won
  if (guess === winningNum) {
    // Disable input
    UI_guessInput.disabled = true;
    // Change border color
    UI_guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    
  }
});

// Set message
function setMessage(msg, color){
  UI_message.style.color = color;
  UI_message.textContent = msg;
}