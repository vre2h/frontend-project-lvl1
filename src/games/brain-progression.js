import getRandomNumber from '../utils.js';
import app from '../index.js';

const gameDefinition = 'What number is missing in the progression?';

// prettier-ignore
const getProgression = ({
  startNumber, size, diff, numberOfSkippedElem,
}) => {
  let answer = 0;
  let progression = '';

  for (let num = startNumber, i = 0; i < size; num += diff, i += 1) {
    if (i === numberOfSkippedElem) {
      answer = num;
      progression = `${progression} .. `;
    } else {
      progression = `${progression} ${num} `;
    }
  }

  return { answer, progression };
};

/**
 * @typedef {Object} BrainProgressionResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.answer - expected answer
 */

/**
 * Checking whether the answer is gcd of the two numbers
 * @returns {BrainProgressionResponse}
 *
 */
const brainProgression = () => {
  const startNumber = getRandomNumber({ max: 100 });
  const diff = getRandomNumber({ min: 1, max: 10 });
  const size = getRandomNumber({ min: 8, max: 10 });
  const numberOfSkippedElem = getRandomNumber({ max: size });

  const { answer, progression } = getProgression({
    startNumber,
    diff,
    numberOfSkippedElem,
    size,
  });

  return { answer: String(answer), question: progression };
};

const exec = () => app(brainProgression, gameDefinition);

export default exec;
