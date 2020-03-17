import getRandomNumber from '../utils.js';
import app from '../index.js';

const operations = ['+', '-', '%', '*'];

const gameDefinition = 'What is the result of the expression?';

/**
 *
 * @param {number} operand1
 * @param {number} operand2
 * @param {string} operator
 * @returns {number} given operation calculated by the operands
 */
const calcByOperation = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '%':
      return operand1 % operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(
        `Provide operation for the given numbers: ${operand1} and ${operand2}`,
      );
  }
};

/**
 * Checking whether the given number is Event
 * @returns {GameInterface}
 *
 */
const getGameData = () => {
  const randomNumber1 = getRandomNumber({ max: 100 });
  const randomNumber2 = getRandomNumber({ max: 100 });
  const randomOperator = operations[getRandomNumber({ max: operations.length })]; // prettier-ignore
  const answer = String(
    calcByOperation(randomNumber1, randomNumber2, randomOperator),
  );

  return {
    answer,
    question: ` ${randomNumber1} ${randomOperator} ${randomNumber2}`,
  };
};

const exec = () => app(getGameData, gameDefinition);

export default exec;
