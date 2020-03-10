import readlineSync from 'readline-sync';

import { getRandomBefore } from '../utils.js';

const Operations = ['+', '-', '/', '*'];

/**
 *
 * @param {number} operand1
 * @param {number} operand2
 * @param {string} operation
 * @returns {number} given operation calculated by the operands
 */
const calcByOperation = (operand1, operand2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '/':
      return operand1 / operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(
        `Provide operation for the given numbers: ${operand1} and ${operand2}`,
      );
  }
};

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
  const randomNumber1 = getRandomBefore(100);
  const randomNumber2 = getRandomBefore(100);
  const randomOperation = Operations[getRandomBefore(Operations.length)];
  const expected = calcByOperation(
    randomNumber1,
    randomNumber2,
    randomOperation,
  );

  console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const actual = Number(readlineSync('Your answer: '));

  return { actual, expected };
};

export default brainCalc;
