import generateNumber from '../utils.js';
import startGame from '../index.js';

const QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const randomNumber = generateNumber();
  const isPrime = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, isPrime];
};

export default () => {
  startGame(QUESTION, generateRoundData);
};
