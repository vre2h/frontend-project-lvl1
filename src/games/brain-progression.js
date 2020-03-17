import getRandomNumber from '../utils.js';
import app from '../index.js';

const gameDefinition = 'What number is missing in the progression?';

/**
 * Returns progression
 * @param {number} startNumber
 * @param {number} diff
 * @param {number} size
 * @returns {[number]}
 */
const getProgression = (startNumber, diff, size) => {
  const progression = [];

  for (let num = startNumber, i = 0; i < size; num += diff, i += 1) {
    progression.push(num);
  }

  return progression;
};

/**
 * Checking whether the answer is gcd of the two numbers
 * @returns {GameInterface}
 */
const getGameData = () => {
  const startNumber = getRandomNumber({ max: 100 });
  const diff = getRandomNumber({ min: 1, max: 10 });
  const size = getRandomNumber({ min: 8, max: 10 });
  const idxOfSkippedElem = getRandomNumber({ max: size });
  const progression = getProgression(startNumber, diff, size);

  const skipElemByIdx = (el, idx) => (idx === idxOfSkippedElem ? '..' : el);

  const answer = String(progression[idxOfSkippedElem]);
  const question = progression.map(skipElemByIdx).join(' ');

  return { answer, question };
};

const exec = () => app(getGameData, gameDefinition);

export default exec;
