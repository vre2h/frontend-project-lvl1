/**
 *
 * @param {number} operand1
 * @param {number} operand2
 * @param {string} operation
 * @returns {number} given operation calculated by the operands
 */
export default (operand1, operand2, operation) => {
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
