import ask from '../helpers/askQstn.js';
import calcByOperation from '../helpers/calcByOperation.js';

const Operations = ['+', '-', '/', '*'];

/**
 * @typedef {Object} BrainCalcResponse
 * @property {number} GameResponse.actual - actual answer
 * @property {number} GameResponse.expected - expected answer
 */

/**
 * Checking whether the given number is Event
 * @returns {BrainCalcResponse}
 *
 */
const brainCalc = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const randomOperation = Operations[Math.floor(Math.random() * 4)];
  const expected = calcByOperation(
    randomNumber1,
    randomNumber2,
    randomOperation,
  );

  console.log(
    `\nQuestion: ${randomNumber1} ${randomOperation} ${randomNumber2}`,
  );
  const actual = Number(ask('Your answer: '));

  return { actual, expected };
};

export default brainCalc;
