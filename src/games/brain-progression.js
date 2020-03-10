import readlineSync from 'readline-sync';

import { getRandomBefore, getRandomSegment } from '../utils.js';

// prettier-ignore
const getProgression = ({
  startNumber, size, diff, numberOfSkippedElem,
}) => {
  let expected = 0;
  let progression = '';

  for (let num = startNumber, i = 0; i < size; num += diff, i += 1) {
    if (i === numberOfSkippedElem) {
      expected = num;
      progression = `${progression} .. `;
    } else {
      progression = `${progression} ${num} `;
    }
  }

  return { expected, progression };
};

/**
 * @typedef {Object} BrainProgressionResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.expected - expected answer
 */

/**
 * Checking whether the answer is gcd of the two numbers
 * @returns {BrainProgressionResponse}
 *
 */
const brainProgression = () => {
  const startNumber = getRandomBefore(100);
  const diff = getRandomSegment(1, 10);
  const size = getRandomSegment(8, 10);
  const numberOfSkippedElem = getRandomBefore(size);

  const { expected, progression } = getProgression({
    startNumber,
    diff,
    numberOfSkippedElem,
    size,
  });

  console.log(`Question: ${progression}`);

  const actual = Number(readlineSync('Your answer: '));

  return { actual, expected };
};

export default brainProgression;
