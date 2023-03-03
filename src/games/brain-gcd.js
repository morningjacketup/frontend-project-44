import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculateGCD = (number, number2) => {
    while (number2 != number) {
        if (number > number2) {
            number = number - number2;
        } else {
            number2 = number2 - number;
        }
    }
    return number2;
}

const generateRoundData = () => {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);
    return [`${firstNumber} ${secondNumber}`, `${calculateGCD(firstNumber, secondNumber)}`];
}

export default () => {
    startGame('Find the greatest common divisor of given numbers.', generateRoundData);
}