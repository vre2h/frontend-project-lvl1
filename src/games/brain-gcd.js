import getRandomNumber from '../utils.js';
import app from '../index.js';

const gameDefinition = 'Find the greatest common divisor of given numbers.';

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
 * Checking whether the answer is gcd of the two numbers
 * @returns {GameInterface}
 *
 */
const getGameInterface = () => {
  const randomNumber1 = getRandomNumber({ max: 100 });
  const randomNumber2 = getRandomNumber({ max: 100 });
  const answer = String(gcd(randomNumber1, randomNumber2));

  return { answer, question: `${randomNumber1} ${randomNumber2}` };
};

const exec = () => app(getGameInterface, gameDefinition);

export default exec;
