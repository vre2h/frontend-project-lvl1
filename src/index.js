import readlineSync from 'readline-sync';

const WinningScore = 3;

const app = (game, Greeting) => {
  if (!game) {
    throw new Error('Please provide a game!');
  }

  console.log('Welcome to the Brain Games! \n');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  console.log(`${Greeting}\n`);

  let score = 0;

  while (score !== WinningScore) {
    const { question, expected } = game();

    const actual = readlineSync.question(`Question: ${question} \n`);

    if (expected === actual) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`
"${actual}" is wrong answer ;(. Correct answer was "${expected}".
Let's try again, ${name}!
      `);
      break;
    }

    if (score === WinningScore) {
      console.log(`\nCongratulations, ${name}!`);
    }
  }
};

export default app;
