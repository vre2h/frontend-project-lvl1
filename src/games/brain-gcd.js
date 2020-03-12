import { getRandomBefore } from '../utils.js';

const Greeting = 'Find the greatest common divisor of given numbers.';

/**
 * Returns the gcd of two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number} gcd of two numbers
 */
const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  }

  return gcd(num1, num2 - num1);
};

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
  const randomNumber1 = getRandomBefore(100);
  const randomNumber2 = getRandomBefore(100);
  const expected = String(gcd(randomNumber1, randomNumber2));

  return { expected, question: `${randomNumber1} ${randomNumber2}` };
};

brainGcd.Greeting = Greeting;

export default brainGcd;
