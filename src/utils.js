/**
 * returns random elem between min and max
 * @param {number} min
 * @param {number} max
 */
// prettier-ignore
const getRandomNumber = ({ min = 0, max = 10 } = {}) => Math.floor(
  Math.random() * (max - min) + min,
);

export default getRandomNumber;
