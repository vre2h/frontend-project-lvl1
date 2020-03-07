import ask from '../helpers/askQstn.js';
import { getRandomBefore, getRandomSegment } from '../helpers/randomizer.js';

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
  const count = getRandomSegment(8, 10);
  const numberOfSkippedElem = getRandomBefore(count);

  let expected = 0;
  let progression = '';

  for (let num = startNumber, i = 0; i < count; num += diff, i += 1) {
    if (i === numberOfSkippedElem) {
      expected = num;
      progression = `${progression} .. `;
    } else {
      progression = `${progression} ${num} `;
    }
  }

  console.log(`Question: ${progression}`);

  const actual = Number(ask('Your answer: '));

  return { actual, expected };
};

export default brainProgression;
