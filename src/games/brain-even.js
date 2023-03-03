import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const generateRoundData = () => {
    const randomNumber = generateRandomNumber(1, 100);
    let answer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [`${randomNumber}`, answer];
}

export default () => {
    startGame('Answer "yes" if the number is even, otherwise answer "no".', generateRoundData)
}