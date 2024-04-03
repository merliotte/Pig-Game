'use strict';
// Selection des classes
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--roll');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

//Fonctionnement du jeté de Dé

btnRoll.addEventListener('click', function () {
  // 1.Génerer un nombre aléàtoire
  const dice = Math.trunc(Math.random() * 6 + 1);
  //2.Afficher un Nombre
  diceEl.src = `dice-${dice}.png`;
  //3.Vérif si c'est 1: si c'est vrai changement de joueur
});
