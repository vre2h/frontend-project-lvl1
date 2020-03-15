import getRandomNumber from '../utils.js';
import app from '../index.js';

const Operations = ['+', '-', '%', '*'];

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
const getGameInterface = () => {
  const randomNumber1 = getRandomNumber({ max: 100 });
  const randomNumber2 = getRandomNumber({ max: 100 });
  const randomOperator = Operations[getRandomNumber({ max: Operations.length })]; // prettier-ignore
  const answer = String(
    calcByOperation(randomNumber1, randomNumber2, randomOperator),
  );

  return {
    answer,
    question: ` ${randomNumber1} ${randomOperator} ${randomNumber2}`,
  };
};

const exec = () => app(getGameInterface, gameDefinition);

export default exec;
