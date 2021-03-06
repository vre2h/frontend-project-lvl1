import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const operators = ['+', '-', '%', '*'];

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
 * @returns {GameData}
 *
 */
const getGameData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = String(calcByOperation(number1, number2, operator));

  return {
    answer,
    question: ` ${number1} ${operator} ${number2}`,
  };
};

const exec = () => runEngine(getGameData, gameDefinition);

export default exec;
