import generateNumber from '../utils.js';
import startGame from '../index.js';

const QUESTION = 'What number is missing in the progression?';

const generateProgression = (length, start, step) => {
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(start + step * i);
  }
  return list;
};

const generateRoundData = () => {
  const maxStepNumber = 5;
  const minStepNumber = 1;
  const maxListLength = 10;
  const minListLength = 6;

  const randomStart = generateNumber();
  const randomStep = generateNumber(minStepNumber, maxStepNumber);
  const randomLength = generateNumber(minListLength, maxListLength);
  const list = generateProgression(randomLength, randomStart, randomStep);
  const randomIndex = generateNumber(0, list.length - 1);
  const answer = String(list[randomIndex]);
  list[randomIndex] = '..';
  const question = list.join(' ');
  return [question, answer];
};

export default () => {
  startGame(QUESTION, generateRoundData);
};
