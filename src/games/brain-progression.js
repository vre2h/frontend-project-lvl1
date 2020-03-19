import getRandomNumber from '../utils.js';
import app from '../index.js';

const gameDefinition = 'What number is missing in the progression?';

/**
 * Returns progression
 * @param {number} firstElem
 * @param {number} diff
 * @param {number} progressionLength
 * @returns {[number]}
 */
const getProgression = (firstElem, diff, progressionLength) => {
  const progression = [];

  for (let num = firstElem, i = 0; i < progressionLength; num += diff, i += 1) {
    progression.push(num);
  }

  return progression;
};

/**
 * Checking whether the answer is gcd of the two numbers
 * @returns {GameData}
 */
const getGameData = () => {
  const firstElem = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(8, 10);
  const indexSkippedElement = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(firstElem, diff, progressionLength);

  const answer = String(progression[indexSkippedElement]);
  progression[indexSkippedElement] = '..';
  const question = progression.join(' ');

  return { answer, question };
};

const exec = () => app(getGameData, gameDefinition);

export default exec;
