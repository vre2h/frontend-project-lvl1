import readlineSync from 'readline-sync';

import { getRandomBefore } from '../utils.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

/**
 * @param {number} num - number that need to be checked
 * @returns {boolean} - is given number even
 */
const isEven = (num) => num % 2 === 0;

/**
 * @typedef {Object} BrainEvenResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.expected - expected answer
 */

/**
 * Checking whether the given number is Event
 * @returns {BrainEvenResponse}
 *
 */
const brainEven = () => {
  const randomNumber = getRandomBefore(100);
  const actualParity = isEven(randomNumber) ? Answers.yes : Answers.no;

  console.log(`Question: ${randomNumber}`);

  const answer = readlineSync('Your answer: ');

  return { actual: answer, expected: actualParity };
};

export default brainEven;
