
    //event goes here
import isYes from './isYes.js';
 // grabbing elements from html   
const quizButton = document.getElementById('quizButton');
const total = document.getElementById('total');
// add a function on click of button
quizButton.addEventListener('click', () => {
    console.log ('button works');
    //launch a prompt for text user input
    const name = prompt ('What\'s your name mortal?');
    //confirmation prompt
    const confirmation = confirm(`${name} are you sure you would like to run the quiz gauntlet?`);
    //breaks function if they click no
    if (confirmation === false) return;
//putting variables inside a string (string concatation)
    const answer1 = prompt('Are there stones in Boulder?');
    const answer2 = prompt('Would dorje drink tea before coffee?');
    const answer3 = prompt('Should Dorje meditate on emptiness?');
// starting a count at 0
    let count = 0;
    //modifies or increments count
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;
    // reports result of count
    total.textContent = `${name}, you got ${count} right! Yama will let you through!`;
});
//THIS IS ALL OF BOOTCAMP 1
//grab elements from DOM
//initialize state
//modify sate
//update state