// import readlineSync from 'readline-sync';

import { getRandomBefore } from '../utils.js';
import app from '../index.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

// prettier-ignore
const Greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

  return { expected: actualParity, question: randomNumber };
};

const exec = () => app(brainPrime, Greeting);

export { brainPrime as default, exec };
