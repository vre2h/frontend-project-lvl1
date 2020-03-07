import ask from '../helpers/askQstn.js';
import { getRandomBefore, getRandomSegment } from '../helpers/randomizer.js';
import getProgression from '../helpers/getProgression.js';

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

  const actual = Number(ask('Your answer: '));

  return { actual, expected };
};

export default brainProgression;
