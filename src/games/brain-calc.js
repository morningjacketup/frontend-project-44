import startGame from '../index.js';
import generateNumber from '../utils.js';

const operations = ['+', '-', '*'];
const QUESTION = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Unknown operator!');
  }
};

const generateRoundData = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  const operator = operations[Math.floor(Math.random() * operations.length)];
  return [
    `${firstNumber} ${operator} ${secondNumber}`,
    String(calculate(firstNumber, secondNumber, operator)),
  ];
};

export default () => {
  startGame(QUESTION, generateRoundData);
};
