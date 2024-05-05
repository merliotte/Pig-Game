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

let scores, currentScore, activePlayer, playing;

const initGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
};
initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Fonctionnement du jeté de Dé

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Génerer un nombre aléàtoire
    const dice = Math.trunc(Math.random() * 6 + 1);
    //2.Afficher le nombre correspondant au dé
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
      switchPlayer();
    }
  }
});

// Enregistrer le score active

//1.Ajoutez le score du joueur actif
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.Vérification score >= 100
    //   Fin du jeu
    document;
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Changement de Joueurs
      switchPlayer();
    }
  }
});

// Réinitiailsation 2

document.querySelector('.btn--new').addEventListener('click', initGame);
