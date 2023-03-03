import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return "operation doesn't exists";
  }
};

const getOperator = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const generateRoundData = () => {
  const minNumber = 1;
  const maxNumber = 100;

  const firstNumber = generateRandomNumber(minNumber, maxNumber);
  const secondNumber = generateRandomNumber(minNumber, maxNumber);
  const operator = getOperator();
  return [
    `${firstNumber} ${operator} ${secondNumber}`,
    `${calculate(firstNumber, secondNumber, operator)}`,
  ];
};

export default () => {
  startGame('What is the result of the expression?', generateRoundData);
};
