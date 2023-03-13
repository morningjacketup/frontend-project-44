import startGame from '../index.js';
import generateNumber from '../utils.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (number, number2) => {
  let firstArgument = number;
  let secondArgument = number2;
  while (secondArgument !== firstArgument) {
    if (firstArgument > secondArgument) {
      firstArgument -= secondArgument;
    } else {
      secondArgument -= firstArgument;
    }
  }
  return secondArgument;
};

const generateRoundData = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  return [`${firstNumber} ${secondNumber}`, String(calculateGCD(firstNumber, secondNumber))];
};

export default () => {
  startGame(DESCRIPTION, generateRoundData);
};
