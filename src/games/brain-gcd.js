import ask from '../helpers/askQstn.js';
import gcd from '../helpers/gcd.js';

/**
 * @typedef {Object} BrainGCDResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.expected - expected answer
 */

/**
 * Checking whether the answer is gcd of the two numbers
 * @returns {BrainGCDResponse}
 *
 */
const brainGcd = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const expected = gcd(randomNumber1, randomNumber2);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const actual = Number(ask('Your answer: '));

  return { actual, expected };
};

export default brainGcd;
