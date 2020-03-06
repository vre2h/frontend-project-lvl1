import { WinningScore, Answers } from '../constants';

import ask from '../helpers/askQstn';
import isEven from '../helpers/isEven';

const brainEven = () => {
  console.log('Welcome to the Brain Games! \n');

  const name = ask('May I have your name? ');

  console.log(`Hello, ${name}! \n`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let score = 0;

  while (score !== WinningScore) {
    const randomNumber = Math.floor(Math.random() * 100);
    const actualParity = isEven(randomNumber) ? Answers.yes : Answers.no;

    console.log(`\nQuestion: ${randomNumber}`);

    const answer = ask('Your answer: ');

    if (actualParity === answer) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`
"${answer}" is wrong answer ;(. Correct answer was "${actualParity}".
Let's try again, ${name}!
      `);
      break;
    }

    if (score === WinningScore) {
      console.log(`\nCongratulations, ${name}!`);
    }
  }
};

export default brainEven;
