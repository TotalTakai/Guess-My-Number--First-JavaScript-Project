'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
let isTheGameActive = true;

// function for updating the score
const changeScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

//function to change the textContent in .message class
const changeMsg = msg => (document.querySelector('.message').textContent = msg);

//function to show to secret number when you guess correctly.
const showSecretNumber = numberBox =>
  (document.querySelector('.number').textContent = numberBox);

//function to set the page styles
const setPageStyle = function (width, backgroundColor) {
  document.querySelector('.number').style.width = width;
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

//Function that runs if someone press the 'check key'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (isTheGameActive) {
    // As Long as the user have points / score he can play.
    if (score > 1) {
      // In case he put no input
      if (!guess) {
        changeMsg('No Number or 0!');

        // If he guesses the right number
      } else if (guess === secretNumber) {
        changeMsg('Correct Number!');
        showSecretNumber(secretNumber);
        setPageStyle('30rem', '#60b347');
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
        isTheGameActive = false;
      } else {
        changeScore();
        guess > secretNumber ? changeMsg('Too high!') : changeMsg('Too low!');
      }
    } else {
      if (score === 1) changeScore();
      changeMsg('You lost the game. Try again!');
    }
  }
});

//Game reset to the original screen other then the Highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeMsg('Start guessing...');
  showSecretNumber('?');
  setPageStyle('15rem', '#222');
  document.querySelector('.guess').value = '';
  isTheGameActive = true;
});
