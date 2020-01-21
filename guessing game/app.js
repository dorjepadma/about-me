import compareNumbers from './guessing game/numberGuess.js';
let randomNumber = Math.floor(Math.random()*20);

const input = document.getElementById('guessField');
const submitGuess = document.getElementById('submitGuess');
const guesses = document.getElementById('guesses');
const lowOrHi = document.getElementById('lowOrHi');
const lastResult = document.getElementById('lastResult');
let guessCount = 0;
submitGuess.addEventListener('click', () => {
const userGuess = input.value ()
function compareNumbers(){
    let userGuess = Number(guessField.value);
    if (guessCount === 4)
// where does numberGuess go or what does numberGuess replace
guesses.textContent = previousGuesses;
guesses.textContent += ueserGuess + '';

}  if (userGuess === randomNumber) {
    lastResult.textContent = 'Yama says you may pass to the pure realm!';
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = '';
    setGameOver ();
}   else if (guessCount === 4) {
    lastResult.textConent = 'To the Lower Realms With You!';
    lowOrHi.textContent = '';
    setGameOver ();
    } 
    else if 
    (userGuess > randomNumber);
    {
    lowOrHi.textContent = 'You are not focused, your guess is too High!';
    } 
    // else if {
    (userGuess < randmoNumber);
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'green';
         lowOrHi.textContent = 'Distracted Again! your guess is too high'}
});