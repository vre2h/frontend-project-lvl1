/**
 * returns random elem between min and max
 * @param {object} range
 * @param {number} range.min
 * @param {number} range.max
 * @returns {number} between range.min and range.max
 */
// prettier-ignore
const getRandomNumber = (min = 0, max = 10) => Math.floor(
  Math.random() * ((max + 1) - min) + min,
);

export default getRandomNumber;
