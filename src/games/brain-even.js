import getRandomNumber from '../utils.js';

import app from '../index.js';

// prettier-ignore
const gameDefinition = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * @param {number} num - number that need to be checked
 * @returns {boolean} - is given number even
 */
const isEven = (num) => num % 2 === 0;

/**
 * Checking whether the given number is Event
 * @returns {GameInterface}
 *
 */
const getGameData = () => {
  const number = getRandomNumber(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';

  return { answer, question: String(number) };
};

const exec = () => app(getGameData, gameDefinition);

export default exec;
