import compareNumbers from '../guessing-game/numberGuess.js';
let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);

const input = document.getElementById('guessNumber'); //your guess
const submitGuess = document.getElementById('submitGuess');//event listener submits guess and runs compare numbers
const lowOrHi = document.getElementById('lowOrHi');//is your guess low or hi
// const guesses = document.getElementById('guessCount');//the number of guesses you have taken
const lastResult = document.getElementById('lastResult');
let guessCount = 0;
submitGuess.addEventListener('click', () => { 
    const guessField = input.value;
    // console.log(guessField);
    // function (){
    let guessNumber = Number(guessField);
    let tries = 9;
    let result = compareNumbers(guessNumber, randomNumber);
        // guesses.textContent = previousGuess;
        // guesses.textContent += ueserGuess + '';

    if (result === 0) {
        lastResult.textContent = 'Yama says, you may pass to the pure realm!';
        // setGameOver();
    }   
    else if
    (result === 1) {
        lowOrHi.textContent = 'Yama Says your guess is too High! try again.'; 
        // lowOrHi.textContent = '';           
    } 
    else if
    (result === -1) {
        lowOrHi.textContent = 'Yama says your guess is too low! try again.';
        // lowOrHi.textContent = '';
    } 
        
    else if (guessCount === tries) {
        lastResult.textContent = 'To the Lower Realms With You!';
        // setGameOver();
    } 
       
});