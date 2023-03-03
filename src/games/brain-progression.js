import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const generateProgression = (length, start, step) => {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(start);
    start += step;
  }
  return list;
};

const generateRoundData = () => {
  const randomStart = generateRandomNumber(0, 100);
  const randomStep = generateRandomNumber(1, 5);
  const randomLength = generateRandomNumber(6, 10);
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
