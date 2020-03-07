/**
 * Returns the gcd of two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number} gcd of two numbers
 */
const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  }

  return gcd(num1, num2 - num1);
};

export default gcd;
