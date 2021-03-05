'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
const showenNumber = document.querySelector('.number');
let score = 20;
const scoreTXT = document.querySelector('.score');
let highScore = 0;
const highScoreTXT = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');

  if (!guess) {
    message.textContent = '⛔️  No Number!';
  } else if (guess === guessNumber) {
    message.textContent = '🏆 Correct Guess!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    showenNumber.textContent = guessNumber;
    setHighScore(score);
  } else if (guess > guessNumber) {
    if (score > 1) {
      message.textContent = '📈 Guess is too High!';
      score--;
      scoreTXT.textContent = score;
    } else {
      message.textContent = '💥 You Lost The Game!';
      scoreTXT.textContent = 0;
    }
  } else if (guess < guessNumber) {
    if (score > 1) {
      message.textContent = '📉 Guess is too Low!';
      score--;
      scoreTXT.textContent = score;
    } else {
      message.textContent = '💥 You Lost The Game!';
      scoreTXT.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  const message = document.querySelector('.message');
  showenNumber.textContent = '?';
  message.textContent = 'Start guessing...';
  score = 20;
  scoreTXT.textContent = score;
  document.querySelector('.guess').value = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function setHighScore(currentScore) {
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreTXT.textContent = currentScore;
  }
}
