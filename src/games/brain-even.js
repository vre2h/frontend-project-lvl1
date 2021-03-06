import getRandomNumber from '../utils.js';

import runEngine from '../index.js';

// prettier-ignore
const gameDefinition = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * @param {number} num - number that need to be checked
 * @returns {boolean} - is given number even
 */
const isEven = (num) => num % 2 === 0;

/**
 * Checking whether the given number is Event
 * @returns {GameData}
 *
 */
const getGameData = () => {
  const number = getRandomNumber(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';

  return { answer, question: String(number) };
};

const exec = () => runEngine(getGameData, gameDefinition);

export default exec;
