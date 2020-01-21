import compareNumbers from './guessing game/numberGuess.js';
let randomNumber = Math.floor(Math.random() * 20);

const input = document.getElementById('guessField'); //your guess
const submitGuess = document.getElementById('submitGuess');//event listener submits guess and runs compare numbers
const lowOrHi = document.getElementById('lowOrHi');//is your guess low or hi
// const guesses = document.getElementById('guessCount');//the number of guesses you have taken
const lastResult = document.getElementById();
let guessCount = 0;
submitGuess.addEventListener('click', () => {
    const guessField = input.value ();
    function guavaBerry(){
        let guessNumber = Number(guessField.value);
        let result = compareNumbers(guessNumber, randomNumber);
        // where does numberGuess go or what does guessNumber replace
        // guesses.textContent = previousGuess;
        // guesses.textContent += ueserGuess + '';

        if (result === 0) {
            lastResult.textContent = 'Yama says you may pass to the pure realm!';
            lowOrHi.textContent = '';
            // setGameOver();
        }   
        else if
        (result === 1) {
            lowOrHi.textContent = 'Yama Says your guess is too High! try again.';            
        } 
        else if
        (result === -1) {
            lowOrHi.textContent = 'Yama says your guess is too low! try again.';} 
        
        else if (guessCount === 4) {
            lastResult.textContent = 'To the Lower Realms With You!';
            lowOrHi.textContent = '';
                // setGameOver();
        } 
    
        guessCount++;
        guessField.value = '';
    }
});