import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const generateProgression = (length, start, step) => {
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(start + step * i);
  }
  return list;
};

const generateRoundData = () => {
  const maxNumber = 100;
  const minNumber = 0;
  const maxStepNumber = 5;
  const minStepNumber = 1;
  const maxListLength = 10;
  const minListLength = 6;

  const randomStart = generateRandomNumber(minNumber, maxNumber);
  const randomStep = generateRandomNumber(minStepNumber, maxStepNumber);
  const randomLength = generateRandomNumber(minListLength, maxListLength);
  const list = generateProgression(randomLength, randomStart, randomStep);
  const randomIndex = generateRandomNumber(0, list.length - 1);
  const answer = String(list[randomIndex]);
  list[randomIndex] = '..';
  const question = list.join(' ');
  return [question, answer];
};

export default () => {
  startGame('What number is missing in the progression?', generateRoundData);
};
