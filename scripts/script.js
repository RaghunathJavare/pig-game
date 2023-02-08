// All selecting elements
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const firstName = document.querySelector('.player-first-name');
const secondName = document.querySelector('.player-second-name');
const btnInFirst = document.querySelector('.btn-insert-first');
const btnInSecond = document.querySelector('.btn-insert-second');
const score1 = document.getElementById('score--1');
const score2 = document.getElementById('score--2');
const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');
const current1 = document.getElementById('current--1');
const current2 = document.getElementById('current--2');
const btnHold1 = document.getElementById('btn-hold-1');
const btnHold2 = document.getElementById('btn-hold-2');
const btnAgain = document.getElementById('btn-again');
const hiddenEl1 = document.getElementById('btn-1');
const hiddenEl2 = document.getElementById('btn-2');
// start to making pig game

// players Names
btnInFirst.addEventListener('click', function () {
  let insertName = prompt('Enter Player First Name 1️⃣');
  if (!insertName) {
    firstName.textContent = 'player-1';
  } else {
    firstName.textContent = insertName;
  }
  hiddenEl1.classList.add('hidden');
});

btnInSecond.addEventListener('click', function () {
  insertName = prompt('Enter Player Second Name 2️⃣');
  if (!insertName) {
    secondName.textContent = 'player-2';
  } else {
    secondName.textContent = insertName;
  }
  hiddenEl2.classList.add('hidden');
});
let playing, playing2, currentScore, currentScore2, scores;
// score set to zero
playing = true;
playing2 = true;
currentScore = 0;
currentScore2 = 0;
score1.textContent = 0;
score2.textContent = 0;
scores = [0, 0];

// switch player

const switchPlayer = function () {
  player1.classList.remove('player-playing');
  player2.classList.add('player-playing');
  currentScore = 0;
  current1.textContent = currentScore;
  playing = false;
  playing2 = true;
};

const switchPlayer2 = function () {
  player1.classList.add('player-playing');
  player2.classList.remove('player-playing');
  currentScore2 = 0;
  current2.textContent = currentScore2;
  playing2 = false;
  playing = true;
};

// game sounds
const gameSounds = function (path) {
  new Audio(path).play();
};

// button first 1️⃣
dice1.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    dice1.src = `image/dice-${dice}-new.png`;
    if (dice != 1) {
      currentScore += dice;
      current1.textContent = currentScore;
    } else {
      currentScore = 0;
      current1.textContent = currentScore;
      player1.classList.toggle('player-playing');
      player2.classList.toggle('player-playing');
      playing = false;
      playing2 = true;
      gameSounds('sound/player-switch.mp3');
    }
  }
});

// button second 2️⃣
dice2.addEventListener('click', function () {
  if (playing2) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    dice2.src = `image/dice-${dice}-new.png`;
    if (dice != 1) {
      currentScore2 += dice;
      current2.textContent = currentScore2;
    } else {
      currentScore2 = 0;
      current2.textContent = currentScore2;
      player1.classList.toggle('player-playing');
      player2.classList.toggle('player-playing');
      playing = true;
      playing2 = false;
      gameSounds('sound/player-switch.mp3');
    }
  }
});

// button hold--1️⃣

btnHold1.addEventListener('click', function () {
  gameSounds('sound/holdScore.mp3');
  scores[0] += currentScore;
  score1.textContent = scores[0];
  if (scores[0] >= 100) {
    gameSounds('sound/game-winner.mp3');
    player1.classList.add('player-winner');
    score1.style.color = 'lawngreen';
    player2.classList.remove('player-playing');
    playing = false;
    playing2 = false;
    currentScore = 0;
    current1.textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold2.addEventListener('click', function () {
  gameSounds('sound/holdScore.mp3');

  scores[1] += currentScore2;
  score2.textContent = scores[1];
  if (scores[1] >= 100) {
    gameSounds('sound/game-winner.mp3');

    player2.classList.add('player-winner');
    score2.style.color = 'lawngreen';
    player1.classList.remove('player-playing');
    playing = false;
    playing2 = false;
    currentScore2 = 0;
    current2.textContent = currentScore2;
  } else {
    switchPlayer2();
  }
});

// Again button

const playAgain = function () {
  gameSounds('sound/play-again.mp3');
  firstName.textContent = 'player-1';
  secondName.textContent = 'player-2';
  currentScore = 0;
  currentScore2 = 0;
  current1.textContent = currentScore;
  current2.textContent = currentScore2;
  scores = [0, 0];
  score1.textContent = scores[0];
  score2.textContent = scores[1];
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
  player1.classList.add('player-playing');
  player2.classList.remove('player-playing');
  score1.style.color = '#2f2f2f';
  score2.style.color = '#2f2f2f';
  playing = true;
  playing2 = false;
  hiddenEl1.classList.remove('hidden');
  hiddenEl2.classList.remove('hidden');
};

btnAgain.addEventListener('click',playAgain)
