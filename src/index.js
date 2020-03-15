import readlineSync from 'readline-sync';

const WinningScore = 3;

/**
 * @typedef {Object} GameInterface
 * @property {string} GameResponse.answer - actual answer
 * @property {string} GameResponse.question - expected answer
 */

/**
 * Engine for running game
 * @param {function} game which @returns {GameInterface}
 * @param {string} gameDefinition
 */
const app = (game, gameDefinition) => {
  if (!game) {
    throw new Error('Please provide a game!');
  }

  console.log('Welcome to the Brain Games! \n');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  console.log(`${gameDefinition}\n`);

  let score = 0;

  while (score !== WinningScore) {
    const { question, answer } = game();

    const actual = readlineSync.question(`Question: ${question} \n`);

    if (answer === actual) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`
"${actual}" is wrong answer ;(. Correct answer was "${answer}".
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
