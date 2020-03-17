import readlineSync from 'readline-sync';

const winningScore = 3;

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

  for (let i = 0; i < winningScore; i += 1) {
    const { question, answer } = game();

    const userAnswer = readlineSync.question(`Question: ${question} \n`);

    if (answer !== userAnswer) {
      console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`); // prettier-ignore
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`\nCongratulations, ${name}!`);
};

export default app;
