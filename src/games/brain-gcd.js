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
  if (num1 === 0 || num2 === 0) {
    return num1 || num2;
  }

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
const getGameData = () => {
  const number1 = getRandomNumber({ max: 100 });
  const number2 = getRandomNumber({ max: 100 });
  const answer = String(gcd(number1, number2));

  return { answer, question: `${number1} ${number2}` };
};

const exec = () => app(getGameData, gameDefinition);

export default exec;
