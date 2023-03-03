import readlineSync from 'readline-sync';
import getName from './cli.js';

export default (description, roundData) => {
  const name = getName();
  console.log(description);
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += i) {
    const [question, answer] = roundData();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );
    if (userAnswer === answer) {
      console.log('Correct');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet\'s try again, ${name}!`
      );
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
