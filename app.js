
    //event goes here
    import isYes from './isYes.js';
    
    const quizButton = document.getElementById('quizButton');
    const Results = document.getElementById('Results');

    quizButton.addEventListener('click', () =>{
     console.log  ('button works');
     const name = prompt ('What\'s your mane mortal?');
     const confirmation = confirm(`${name} + are you sure you would like to run the quiz guantlet?`);
     if (confirmation === false) return;

     const answer1 = prompt('Question 1 is yes');
     const answer2 = prompt('Question 2 is no');
     const answer3 = prompt('Question 3 is yes');
     
     Let count = 0;
     if (isYes (answer1) += 1);
     if (!isYes (answer2) += 1);
     if (isYes (answer3) += 1);
     total.textContent = `${name}, you got {count} right! Well Done!`

    })