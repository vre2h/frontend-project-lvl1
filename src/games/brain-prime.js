// import readlineSync from 'readline-sync';

import getRandomNumber from '../utils.js';
import app from '../index.js';

// prettier-ignore
const gameDefinition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Check if the number is prime
 * @param {number} num - given number
 * @returns {boolean} whether given number prime or not
 */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

/**
 * Checking whether the given number is Event
 * @returns {GameInterface}
 *
 */
const getGameData = () => {
  const number = getRandomNumber(-100, 100);
  const answer = isPrime(number) ? 'yes' : 'no';

  return { answer, question: String(number) };
};

const exec = () => app(getGameData, gameDefinition);

export default exec;
