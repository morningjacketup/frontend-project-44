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
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const operator = getOperator();
  return [
    `${firstNumber} ${operator} ${secondNumber}`,
    `${calculate(firstNumber, secondNumber, operator)}`,
  ];
};

export default () => {
  startGame('What is the result of the expression?', generateRoundData);
};
