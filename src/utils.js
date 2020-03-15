/**
 * returns random elem between min and max
 * @param {object} range
 * @param {number} range.min
 * @param {number} range.max
 */
// prettier-ignore
const getRandomNumber = ({ min = 0, max = 10 } = {}) => Math.floor(
  Math.random() * (max - min) + min,
);

export default getRandomNumber;
