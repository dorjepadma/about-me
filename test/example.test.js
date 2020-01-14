// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../isYes.js';
QUnit.module ('testing is yes');

const test = QUnit.test;

test('isYes should take positive answers and return as true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'y' || 'yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
}); 
test ('isYes should take any other answer and return it as false', function(assert) {
    const input = 'no' || 'n';
    const expected = false;

    const result = isYes(input);
    assert.equal(expected, result);
});

