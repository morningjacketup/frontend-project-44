import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculateGCD = (number, number2) => {
  while (number2 !== number) {
    if (number > number2) {
      // eslint-disable-next-line no-param-reassign
      number -= number2;
    } else {
      // eslint-disable-next-line no-param-reassign
      number2 -= number;
    }
  }
  return number2;
};

const generateRoundData = () => {
  const maxNumber = 100;
  const minNumber = 1;

  const firstNumber = generateRandomNumber(minNumber, maxNumber);
  const secondNumber = generateRandomNumber(minNumber, maxNumber);
  return [`${firstNumber} ${secondNumber}`, `${calculateGCD(firstNumber, secondNumber)}`];
};

export default () => {
  startGame('Find the greatest common divisor of given numbers.', generateRoundData);
};
