
    //event goes here
import isYes from './isYes.js';
    
const quizButton = document.getElementById('quizButton');
const results = document.getElementById('Results');

quizButton.addEventListener('click', () => {
    console.log  ('button works');
    const name = prompt ('What\'s your mane mortal?');
    const confirmation = confirm(`${name} + are you sure you would like to run the quiz gauntlet?`);
    if (confirmation === false) return;

    const answer1 = prompt('Are there stones in Boulder?');
    const answer2 = prompt('Would dorje drink tea before coffee?');
     // why is answer 3 declared but not reading a value
    const answer3 = prompt('Should Dorje meditate on emptiness?');

    let count = 0;
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;
    total.textContent = `${name}, you got ${count} right! Well Done!`

})