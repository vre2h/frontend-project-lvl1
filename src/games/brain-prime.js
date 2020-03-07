import { Answers } from '../constants.js';

import ask from '../helpers/askQstn.js';
import isPrime from '../helpers/isPrime.js';
import { getRandomBefore } from '../helpers/randomizer.js';

/**
 * @typedef {Object} BrainPrimeResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.expected - expected answer
 */

/**
 * Checking whether the given number is Event
 * @returns {BrainPrimeResponse}
 *
 */
const brainPrime = () => {
  const randomNumber = getRandomBefore(100);
  const actualParity = isPrime(randomNumber) ? Answers.yes : Answers.no;

  console.log(`Question: ${randomNumber}`);

  const answer = ask('Your answer: ');

  return { actual: answer, expected: actualParity };
};

export default brainPrime;
