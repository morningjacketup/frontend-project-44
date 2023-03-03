import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

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
  const randomNumber = generateRandomNumber(0, 100);
  return [`${randomNumber}`, isPrime(randomNumber) ? 'yes' : 'no'];
};

export default () => {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRoundData
  );
};
