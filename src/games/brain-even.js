import { Answers } from '../constants.js';

import ask from '../helpers/askQstn.js';
import isEven from '../helpers/isEven.js';

/**
 * @typedef {Object} GameResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.expected - expected answer
 */

/**
 * Checking whether the given number is Event
 * @returns {GameResponse}
 *
 */
const brainEven = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const actualParity = isEven(randomNumber) ? Answers.yes : Answers.no;

  console.log(`\nQuestion: ${randomNumber}`);

  const answer = ask('Your answer: ');

  return { actual: answer, expected: actualParity };
};

export default brainEven;