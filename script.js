const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const target = document.getElementById('target');
const timerElement = document.getElementById('timer-value');

let score = 0;
let gameInterval;
let timeLeft = 30;

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.disabled = true;
  target.style.display = 'block';
  score = 0;
  scoreElement.textContent = `Puntuación: ${score}`;
  
  gameInterval = setInterval(moveTarget, 1000);
  updateTimer();
  setTimeout(stopGame, timeLeft * 1000);
}

function moveTarget() {
  const gameContainer = document.getElementById('game-container');
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;

  const randomX = Math.floor(Math.random() * (containerWidth - 50));
  const randomY = Math.floor(Math.random() * (containerHeight - 50));

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

target.addEventListener('click', increaseScore);

function increaseScore() {
  score++;
  scoreElement.textContent = `Puntuación: ${score}`;
}

function updateTimer() {
  timerElement.textContent = timeLeft;
  timeLeft--;
  if (timeLeft >= 0) {
    setTimeout(updateTimer, 1000);
  }
}

function stopGame() {
  clearInterval(gameInterval);
  startButton.disabled = false;
  target.style.display = 'none';
}