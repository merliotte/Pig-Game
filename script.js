'use strict';
// Selection des classes
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const activeScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Fonctionnement du jeté de Dé

btnRoll.addEventListener('click', function () {
  // 1.Génerer un nombre aléàtoire
  const dice = Math.trunc(Math.random() * 6 + 1);
  //2.Afficher un Nombre
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  //3.Vérif si c'est 1: si c'est vrai changement de joueur
  if (dice !== 1) {
    // 3.1.Ajout d'un score pour le joueur
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //Changer de personne
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

// Enregistrer le score active

//1.Ajoutez le score du joueur actif
btnHold.addEventListener('click', function () {
  activeScore[activePlayer] = activePlayer = +currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    activeScore[activePlayer];
  //2.
});
