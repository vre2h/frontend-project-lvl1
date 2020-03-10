import ask from '../helpers/askQstn.js';
import isEven from '../helpers/isEven.js';
import { getRandomBefore } from '../helpers/randomizer.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

/**
 * @typedef {Object} BrainEvenResponse
 * @property {string} GameResponse.actual - actual answer
 * @property {string} GameResponse.expected - expected answer
 */

/**
 * Checking whether the given number is Event
 * @returns {BrainEvenResponse}
 *
 */
const brainEven = () => {
  const randomNumber = getRandomBefore(100);
  const actualParity = isEven(randomNumber) ? Answers.yes : Answers.no;

  console.log(`Question: ${randomNumber}`);

  const answer = ask('Your answer: ');

  return { actual: answer, expected: actualParity };
};

export default brainEven;
