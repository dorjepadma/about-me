

let randomNumber = Math.floor(Math.random()*20);

const guesses = document.getElementById('.guesses')
const yamasWords= document.getElementById('.Yama Says');
const numberGuess = document.getElementById('.LastResult');
const lowOrHi = document.getElementById('.lowOrHi');
const guessSubmit = document.getElementById('.guessSubmit')
const triesLeft= document.getElementById('.guessField');
let guessCount = 0;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guesscount ===1) 
{guesses.textContent = 'Previous Guesses: '}


guesses.textContent += ueserGuess + ' ';

if (usserGuess === randomNumber) {
    lastResult.textContent = 'Yama says you may pass to the pure realm!';
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = '';
    setGameOver ();
} else if (guessCount === 4) {
    lastResult.textConent = 'To the Lower Realms With Yout!';
    lowOrHi.textContent = ''
    setGameOver ();
} else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'green';
    if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Yama Says, " You are not focused, your guess is too High!"';
    } else if(userGuess < randmoNumber) {lowOrHi.textContent = 'Yama says,"Distracted Again! your guess is too high"'}
    }


guessCount++;
guessField.value = '';
guessFiled.focus();

})
