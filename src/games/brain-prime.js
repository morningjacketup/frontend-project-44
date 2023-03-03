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
  const maxNumber = 100;
  const minNumber = 0;

  const randomNumber = generateRandomNumber(minNumber, maxNumber);
  return [`${randomNumber}`, isPrime(randomNumber) ? 'yes' : 'no'];
};

export default () => {
  startGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateRoundData);
};
