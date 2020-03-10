import readlineSync from 'readline-sync';

import { Greetings } from './constants.js';
import brainEven from './games/brain-even.js';

const WinningScore = 3;

const app = (launchGame = brainEven) => {
  console.log('Welcome to the Brain Games! \n');

  const name = readlineSync('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  console.log(`${Greetings[launchGame.name]}\n`);

  let score = 0;

  while (score !== WinningScore) {
    const { expected, actual } = launchGame();

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
