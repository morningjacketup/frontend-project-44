import startGame from '../index.js';
import generateNumber from '../utils.js';

const QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const randomNumber = generateNumber();
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [`${randomNumber}`, answer];
};

export default () => {
  startGame(QUESTION, generateRoundData);
};
