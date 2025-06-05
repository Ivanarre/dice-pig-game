'use strict';

// Selected elements
const score0 = document.getElementById('score--0');
const currentScore0 = document.getElementById('current--0');
const score1 = document.getElementById('score--1');
const currentScore1 = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEle.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    currentScore0.textContent = currentScore;
  } else {
  }
});
