import startGame from '../index.js';
import generateNumber from '../utils.js';

const QUESTION = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (number, number2) => {
  let firstArgument = number;
  let secondArgument = number2;
  while (secondArgument !== firstArgument) {
    if (number > number2) {
      firstArgument -= number2;
    } else {
      secondArgument -= number;
    }
  }
  return secondArgument;
};

const generateRoundData = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  return [`${firstNumber} ${secondNumber}`, `${calculateGCD(firstNumber, secondNumber)}`];
};

export default () => {
  startGame(QUESTION, generateRoundData);
};
