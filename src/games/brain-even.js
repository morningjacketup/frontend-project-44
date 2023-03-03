import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const generateRoundData = () => {
  const maxNumber = 100;
  const minNumber = 1;

  const randomNumber = generateRandomNumber(minNumber, maxNumber);
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [`${randomNumber}`, answer];
};

export default () => {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', generateRoundData);
};
