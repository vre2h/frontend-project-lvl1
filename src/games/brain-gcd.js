import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameDefinition = 'Find the greatest common divisor of given numbers.';

/**
 * Returns the gcd of two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number} gcd of two numbers
 */
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

/**
 * Checking whether the answer is gcd of the two numbers
 * @returns {GameData}
 *
 */
const getGameData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const answer = String(gcd(number1, number2));

  return { answer, question: `${number1} ${number2}` };
};

const exec = () => runEngine(getGameData, gameDefinition);

export default exec;
