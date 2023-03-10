import generateNumber from '../utils.js';
import startGame from '../index.js';

const QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const randomNumber = generateNumber();
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => {
  startGame(QUESTION, generateRoundData);
};
