export default function compareNumbers(guessNumber, randomNumber) {
    if (guessNumber === randomNumber){
        return 0;
    }
    if (guessNumber > randomNumber){
        return 1;
    }
    if (guessNumber < randomNumber){
        return -1;
    }

   
}