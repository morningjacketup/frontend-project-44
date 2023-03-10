import readlineSync from 'readline-sync';

const startGame = (description, generateRoundsData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const [question, answer] = generateRoundsData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}',`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
