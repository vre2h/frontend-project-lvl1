import readlineSync from 'readline-sync';

import { getRandomBefore } from '../utils.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

/**
 * Check if the number is prime
 * @param {number} num - given number
 * @returns {boolean} whether given number prime or not
 */
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

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

  const answer = readlineSync('Your answer: ');

  return { actual: answer, expected: actualParity };
};

export default brainPrime;
