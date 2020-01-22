// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from './numberGuess.js';
QUnit.module ('testing numberGuess');

const test = QUnit.test;

test('numberGuess should take positive answers and return as true', function(assert) {
    const input = 9;
    const correctNumber = 9;
    const shouldBeZero = compareNumbers(input, correctNumber);
    assert.equal(shouldBeZero, 0);
});
test('numberGuess should take too High anwer and return as 1', function(assert) {
    const input = 10;
    const correctNumber = 9;
    const shouldBeUpOne = compareNumbers(input, correctNumber);
    assert.equal(shouldBeUpOne, 1);
});
test('numberGuess should take too Low anwer and return as -1', function(assert) {
    const input = 8;
    const correctNumber = 9;
    const shouldDownUpOne = compareNumbers(input, correctNumber);
    assert.equal(shouldDownUpOne, -1);
});
